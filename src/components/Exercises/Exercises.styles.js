import styled from 'styled-components';

export const ExercisesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 1em; 
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px; 
   overflow-x: hidden; 

   @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: auto;
    margin-right: auto; 
    margin-top: 20px; 
    justify-items: center; 
  }
`;


export const Exercise = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.isOpen ? '360px' : '180px')};
  grid-column: ${props => (props.isOpen ? 'span 2' : 'auto')};
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px 5px cyan;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2em);
    height: ${props => (props.isOpen ? '268px' : '134px')}; 
  }
`;





export const ExerciseImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  filter: brightness(1.2);
  aspect-ratio: 16/9;

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

  @media(max-width: 768px) {
  left: auto;
  right: 2px; 
  top: 2px; 
  margin-bottom: 10px; 
}
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
   @media (max-width: 768px) { 
        margin-top: 5px;
        margin-bottom: 5px; 
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
    margin-top: 45px;
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
   @media (max-width: 600px) {
        font-size: 5vw; 
    }
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
  margin-top: 35px; 
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
  right: 0; 
  color: white;
  padding: 1em 1em 1em 2em;
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  z-index: 1;
  box-sizing: border-box; 
  @media (max-width: 768px) {
    bottom: -15px; 
  }
`;



export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    background-color: darkcyan;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;

    &:hover {
        background-color: cyan;
        transform: scale(1.1);
    }
`

export const SelectedExercisesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2c2c2c;
    border-radius: 10px;
    padding: 20px;
    margin-top: 30px; 
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const SelectedExerciseCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3d3d3d;
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 5px;
    width: 80%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const SelectedExerciseName = styled.p`
    color: #ffffff;
    font-size: 18px;
    text-transform: uppercase; 
`;

export const SelectedExerciseEquipment = styled.p`
    color: #ffffff;
    font-size: 16px;
`;

export const RemoveButton = styled.button`
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #ff4d4d;
    }
`;

export const SaveButton = styled.button`
    background-color: #008080;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin-top: 20px;

    &:hover {
        background-color: #00ffff;
    }
`;

export const ListNameInput = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
`;











