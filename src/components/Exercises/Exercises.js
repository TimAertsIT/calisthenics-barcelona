import React, { useState, useEffect } from 'react';
import exercises from '../../exercises.json';
import { ExerciseName, ExerciseImage, Exercise, ExercisesContainer } from './Exercises.styles';
import data from "../../data.json";
import { ParkName, ParkImage, Park, ParksContainer } from "../Parks/Parks.styles";

function Exercises() {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [recommendedParks, setRecommendedParks] = useState([]);
    const [selectedExercises, setSelectedExercises] = useState([]);

    const muscleGroups = [...new Set(exercises.flatMap(exercise => exercise.trains))];

    const filteredExercises = selectedGroup
        ? exercises.filter(exercise => exercise.trains.includes(selectedGroup))
        : exercises;

    const requiredEquipment = [...new Set(selectedExercises.flatMap(exercise => exercise.equipment))];

    useEffect(() => {
        if (selectedExercises.length > 0) {
            const suitableParks = data.map(park => {
                const matchingEquipment = park.equipment.filter(equip => requiredEquipment.includes(equip));
                return { ...park, matchingEquipment };
            }).filter(park => park.matchingEquipment.length > 0);
            setRecommendedParks(suitableParks);
        } else {
            setRecommendedParks([]);
        }
    }, [selectedExercises]);

    return (
        <div>
            <div>
                {muscleGroups.map(group => (
                    <button key={group} onClick={() => setSelectedGroup(group)}>
                        {group}
                    </button>
                ))}
            </div>

            <ExercisesContainer>
                {filteredExercises.map((item) => (
                    <Exercise key={item.id}>
                        <ExerciseName>{item.name}</ExerciseName>
                        <ExerciseImage src={item.image} alt={item.name} />
                        <p>Trains: {item.trains.join(', ')}</p>
                        <p>Equipment: {item.equipment.join(', ')}</p>
                        <button onClick={() => {
                            if (!selectedExercises.includes(item)) {
                                setSelectedExercises([...selectedExercises, item]);
                            }
                        }}>Add</button>
                    </Exercise>
                ))}
            </ExercisesContainer>

            <div>
                <h2>Selected Exercises</h2>
                {selectedExercises.map((exercise, index) => (
                    <div key={index}>
                        <p>{exercise.name}</p>
                        <button onClick={() => {
                            const newSelectedExercises = [...selectedExercises];
                            newSelectedExercises.splice(index, 1);
                            setSelectedExercises(newSelectedExercises);
                        }}>Remove</button>
                    </div>
                ))}
            </div>

            <ParksContainer>
                <h1>Recommended parks</h1>
                {recommendedParks.map((item) => (
                    <Park key={item.id}>
                        <ParkName>{item.name}</ParkName>
                        <ParkImage src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                        <ul>
                            {item.equipment.map((equip, index) => (
                                <li key={index}>{equip}</li>
                            ))}
                        </ul>
                        <p>Matching Equipment: {item.matchingEquipment.join(', ')} ({item.matchingEquipment.length}/{requiredEquipment.length})</p>
                    </Park>
                ))}
            </ParksContainer>
        </div>
    );
}

export default Exercises;
