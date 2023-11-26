import styled from 'styled-components';

export const ExercisesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 1em; 
`;

export const Exercise = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  margin: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px 5px cyan;
  }
`;


export const ExerciseImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  filter: brightness(1.2);
  aspect-ratio: 4 / 3;

  ${Exercise}:hover & {
    filter: brightness(50%);
  }
`;




export const ExerciseName = styled.h2`
    position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  z-index: 1;
`;

export const ExerciseButton = styled.button`
   position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: #008080;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: cyan;
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
    margin-top: 15px;
    margin-bottom: 15px; 
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

export const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2em;
  margin-top: 50px; 
  line-height: 1.6; 
  max-width: 900px; 
  margin-left: auto; 
  margin-right: auto; 
  border-top: 1px solid cyan; 
  padding-top: 0.6em; 
  border-bottom: 1px solid cyan; 
  padding-bottom: 0.6em; `

export const ExerciseText = styled.p`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
color: white;
padding: 0.5em;
background-color: rgba(0, 0, 0, 0.5);
text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
border-radius: 5px;
z-index: 1`











