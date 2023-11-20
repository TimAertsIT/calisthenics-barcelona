import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db, auth } from '../../Firebase';
import { StyledDiv } from './MyTrainings.styles';

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
                    console.log(doc.data()); // log the data
                    exercises.push(doc.data());
                });
                setUserExercises(exercises);
            }
        };

        if (isAuthenticated) {
            fetchExercises();
        }
    }, [isAuthenticated]);

    return (
        <div>
            {userExercises.map((exerciseList, index) => (
                <StyledDiv key={index}>
                    <h2>{exerciseList.name}</h2>
                    <h2>{exerciseList.date}</h2>
                    {exerciseList.exercises.map((exercise, index) => (
                        <p key={index}>{exercise.name}</p>
                    ))}
                </StyledDiv>
            ))}
        </div>
    );
};

export default Trainings;


