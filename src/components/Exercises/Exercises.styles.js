import styled from 'styled-components';

export const ExercisesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 1em; 
    background: linear-gradient(to bottom, #008080, #00FFFF);
`;

export const Exercise = styled.div`
    margin: 1em; 
    padding: 1em; 
    border-radius: 4px;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: scale(1.05);
    }
`;

export const ExerciseImage = styled.img`
    width: 100%;
    height: 40%;
    object-fit: cover;
    filter: brightness(0.9) contrast(1.2);
    margin: 0;
    padding: o;
    border: 3px solid #008080;
    border-radius: 5px; 
`;

export const ExerciseName = styled.h2`
    color: #008080;
    text-align: center;
    margin: 0;
    padding: 0;
`;

export const ExerciseButton = styled.button`
    display: block;
    width: 50%;
    padding: 10px;
    margin: auto; 
    color: white;
    background-color: #008080;
    border: none;
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #00FFFF;
    }
`;






