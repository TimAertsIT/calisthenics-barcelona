import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db, auth } from '../../Firebase';
import { TrainingsContainer, ExerciseListCard, ExerciseListName, ExerciseListDate, ExerciseName, RemoveButton, ExerciseNameWrapper } from './MyTrainings.styles';

const Trainings = ({ isAuthenticated, handleLogout }) => {
    const [userExercises, setUserExercises] = useState([]);
    console.log(isAuthenticated);

    useEffect(() => {
        const fetchExercises = async () => {
            const user = auth.currentUser;
            if (user) {
                const q = query(collection(db, "exerciseLists"), where("uid", "==", user.uid));
                const querySnapshot = await getDocs(q);
                let exercises = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.data());
                    exercises.push({ id: doc.id, ...doc.data() });
                });
                setUserExercises(exercises);
            }
        };

        if (isAuthenticated) {
            fetchExercises();
        }
    }, [isAuthenticated]);

    const removeExercise = async (id) => {
        await deleteDoc(doc(db, "exerciseLists", id));
        setUserExercises(userExercises.filter(exercise => exercise.id !== id));
    }

    return (
        <TrainingsContainer>
            {userExercises.map((exerciseList, index) => (
                <ExerciseListCard key={index}>
                    <ExerciseListName>{exerciseList.name}</ExerciseListName>
                    <ExerciseListDate>{exerciseList.date}</ExerciseListDate>
                    <ExerciseNameWrapper>
                        {exerciseList.exercises.map((exercise, index) => (
                            <ExerciseName key={index}>
                                <input type="checkbox" />
                                {exercise.name}
                            </ExerciseName>
                        ))}
                    </ExerciseNameWrapper>
                    <RemoveButton onClick={() => removeExercise(exerciseList.id)}>Remove</RemoveButton>
                </ExerciseListCard>
            ))}
        </TrainingsContainer>

    );

}

export default Trainings;



