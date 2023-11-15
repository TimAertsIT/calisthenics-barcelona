import React, { useState, useEffect } from 'react';
import exercises from '../../exercises.json';
import { ExerciseName, ExerciseImage, Exercise, ExercisesContainer } from './Exercises.styles';
import data from "../../data.json";
import { ParkName, ParkImage, Park, ParksContainer } from "../Parks/Parks.styles";
import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';




function Exercises({ selectedPark, isAuthenticated }) {
    const firebaseConfig = {
        apiKey: "AIzaSyCzoqCWg6-4eqavpZvzAB_xJeYwQ3cKGMQ",
        authDomain: "calisthenics-barcelona.firebaseapp.com",
        projectId: "calisthenics-barcelona",
        storageBucket: "calisthenics-barcelona.appspot.com",
        messagingSenderId: "804554220033",
        appId: "1:804554220033:web:7e6cc4e2670c88c9ba9600",
        measurementId: "G-1G0DJ4K587"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [recommendedParks, setRecommendedParks] = useState([]);
    const [selectedExercises, setSelectedExercises] = useState([]);
    const [listName, setListName] = useState('');

    const muscleGroups = [...new Set(exercises.flatMap(exercise => exercise.trains))];

    let filteredExercises = exercises;
    if (selectedGroup) {
        filteredExercises = filteredExercises.filter(exercise => exercise.trains.includes(selectedGroup));
    }
    if (selectedPark) {
        filteredExercises = filteredExercises.filter(exercise =>
            exercise.equipment.some(equip => selectedPark.equipment.includes(equip))
        );
    }



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

    const handleSubmit = async () => {
        if (isAuthenticated) {
            try {
                const docRef = await addDoc(collection(db, "exerciseLists"), {
                    name: listName,
                    exercises: selectedExercises
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

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
                {selectedExercises.length > 0 && <h2>Selected Exercises</h2>}
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
                {selectedExercises.length > 0 &&
                    <div>
                        <button onClick={handleSubmit}>Save</button>
                        <input type="text" value={listName} onChange={e => setListName(e.target.value)} placeholder="Enter list name" />
                    </div>
                }
            </div>
            <ParksContainer>
                {recommendedParks.length > 0 && <h1>Recommended parks</h1>}
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
