import styled from 'styled-components';

export const TrainingsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #2c2c2c;
    border-radius: 10px;
    padding: 20px 50px;
    margin: 30px auto; 
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    overflow: auto;
    width: 90%;

    @media (max-width: 768px) {
        width: 80%;
        padding: 20px 10px;
        box-sizing: border-box; 
    }
`;

export const ExerciseListCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #3d3d3d;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    width: 100%;
    max-width: 280px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 80%; 
        padding: 10px 5px;
        box-sizing: border-box; 
        justify-content: center; 
        align-items: center;
    }
`;

export const ExerciseListName = styled.h2`
    color: #ff0000;
    font-size: 18px;
    text-transform: uppercase; 
    border-bottom: 2px solid #ff0000;
    text-align: center;
`;

export const ExerciseListDate = styled.h2`
    color: #ffffff;
    font-size: 16px;
    border-bottom: 1px solid #ffffff;
    text-align: center;
`;

export const ExerciseNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const ExerciseName = styled.div`
    color: #ffffff;
    font-size: 16px;
    position: relative;
    display: flex;
    align-items: center; 
    justify-content: flex-start;
    margin-left: 50px; 

    input[type="checkbox"] {
        margin-right: 10px;
    }

     @media (max-width: 768px) {
       margin-left: 20px; 
    }
`;


export const RemoveButton = styled.button`
    color: #ffffff;
    background-color: #ff0000;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #cc0000;
    }
`;







