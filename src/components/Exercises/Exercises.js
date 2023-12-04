import React, { useState, useEffect } from 'react';
import exercises from '../../exercises.json';
import { ExerciseName, ExerciseImage, Exercise, ExercisesContainer, ExerciseButton, FilterButton, ButtonContainer, ExerciseTitle, Trains, Train, Equipment, EquipmentItem, Description, ModalContainer, ExerciseText, CloseButton, SelectedExerciseCard, SelectedExerciseEquipment, SelectedExerciseName, SelectedExercisesContainer, SaveButton, ListNameInput, RemoveButton } from './Exercises.styles';
import data from "../../data.json";
import { ParkName, ParkImage, Park, ParksContainer } from "../Parks/Parks.styles";
import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import Modal from 'react-modal';
Modal.setAppElement('#root')

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

    const [currentExercise, setCurrentExercise] = useState(null);

    const openExercise = (exercise) => {
        setCurrentExercise(exercise);
    }

    const closeExercise = () => {
        setCurrentExercise(null);
    }

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
            exercise.equipment.length === 0 || exercise.equipment.some(equip => selectedPark.equipment.includes(equip))
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
            const user = auth.currentUser;
            if (user) {
                try {
                    const date = new Date();
                    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().substr(-2)}`;
                    const docRef = await addDoc(collection(db, "exerciseLists"), {
                        uid: user.uid,
                        name: listName,
                        exercises: selectedExercises,
                        date: formattedDate
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            } else {
                console.log("No user is signed in.");
            }
        }
    };

    return (
        <div>
            <ExerciseTitle>Exercises</ExerciseTitle>
            <Description>Filter exercises by muscle group, add them to your own training routine or click the image to see a tutorial </Description>
            <ButtonContainer>
                {muscleGroups.map(group => (
                    <FilterButton key={group} onClick={() => setSelectedGroup(group)}>
                        {group}
                    </FilterButton>
                ))}
            </ButtonContainer>
            <ExercisesContainer>
                {filteredExercises.map((item) => (
                    <Exercise key={item.id} isOpen={currentExercise === item}>
                        {currentExercise === item ? (
                            <>
                                <div style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                                    width: '100%', /* Adjust width and height to match Exercise card */
                                    height: '100%',
                                }}>
                                    <CloseButton onClick={closeExercise}>Close</CloseButton>
                                    <iframe
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '50%',
                                        }}
                                        src={`https://www.youtube.com/embed/${currentExercise.url.split('https://youtu.be/')[1]}`}
                                        title={currentExercise.name}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    />
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <button style={{ zIndex: 4 }} onClick={closeExercise}>Close</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <ExerciseImage src={item.image} alt={item.name} onClick={() => openExercise(item)} />
                                <ExerciseName>{item.name}</ExerciseName>
                                <ExerciseButton onClick={() => {
                                    if (!selectedExercises.includes(item)) {
                                        setSelectedExercises([...selectedExercises, item]);
                                    }
                                }}>Add</ExerciseButton>
                            </>
                        )}
                    </Exercise>
                ))}
            </ExercisesContainer>


            {selectedExercises.length > 0 && (
                <div>
                    <ExerciseTitle>Selected Exercises</ExerciseTitle>
                    <Description> Add exercises to your own training routine and save them to your personal "My Trainings" page </Description>
                    <SelectedExercisesContainer>
                        {selectedExercises.map((exercise, index) => (
                            <SelectedExerciseCard key={index}>
                                <SelectedExerciseName>{exercise.name}</SelectedExerciseName>
                                <RemoveButton onClick={() => {
                                    const newSelectedExercises = [...selectedExercises];
                                    newSelectedExercises.splice(index, 1);
                                    setSelectedExercises(newSelectedExercises);
                                }}>Remove</RemoveButton>
                            </SelectedExerciseCard>
                        ))}
                        <div>
                            <SaveButton onClick={handleSubmit}>Save</SaveButton>
                            <ListNameInput type="text" value={listName} onChange={e => setListName(e.target.value)} placeholder="Enter list name" />
                        </div>
                    </SelectedExercisesContainer>
                </div>
            )}

            <ExerciseTitle>Recommended parks</ExerciseTitle>
            <ExercisesContainer>
                {recommendedParks.length > 0 && (
                    <>
                        {recommendedParks
                            .sort((a, b) => b.matchingEquipment.length - a.matchingEquipment.length)
                            .map((item) => (
                                <Exercise key={item.id}>
                                    <ExerciseName>{item.name}</ExerciseName>
                                    <ExerciseImage src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                                    <ul>
                                        {item.equipment.map((equip, index) => (
                                            <li key={index}>{equip}</li>
                                        ))}
                                    </ul>
                                    <ExerciseText>Matching Equipment: {item.matchingEquipment.join(', ')} ({item.matchingEquipment.length}/{requiredEquipment.length})</ExerciseText>
                                </Exercise>
                            ))}
                    </>
                )}
            </ExercisesContainer>


        </div>
    );
}

export default Exercises;

