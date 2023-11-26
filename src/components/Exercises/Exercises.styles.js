import styled from 'styled-components';

export const ExercisesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
    height: auto;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    filter: brightness(0.9) contrast(1.2);
    margin: 0;
    padding: 0;
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

export const FilterButton = styled.button`
    display: inline-block;
    width: auto;
    margin: 5px;
    padding: 10px;
    color: white;
     background-color: #008080;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #00FFFF;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ExerciseTitle = styled.h1`
    display: flex;
    justify-content: center;
    width: auto;
    margin-top: 30px;
    margin-bottom: 15px;
    padding: 15px;
    color: white;
    background: linear-gradient(to right, #008080, #00FFFF);
    border: none;
    text-align: center;
    text-transform: uppercase;
  font-size: 2.5em;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Trains = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`;

export const Train = styled.div`
    background-color: #008080;
    color: white;
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
`;

export const Equipment = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`;

export const EquipmentItem = styled.div`
    background-color: #00FFFF;
    color: black;
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
`;








