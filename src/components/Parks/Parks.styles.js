import styled from 'styled-components';

export const Park = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 75%; 
  margin: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); 
box-sizing: border-box; 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px 5px cyan;
  }
`;



export const ParkName = styled.h2`
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



export const ParkImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  filter: brightness(1.2); 

  ${Park}:hover & {
    filter: brightness(50%);
  }
`;

export const ParkButton = styled.button`
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

export const ParksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 1em; 
  padding-left: 15px;
  padding-right: 15px; 
  overflow-x: hidden; 
  justify-items: center; 
  width: 100%; 
  box-sizing: border-box;

  @media (max-width: 768px) { 
    grid-template-columns: 1fr; 
  }
`;




export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const DetailImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 20px;
  border: 2px solid cyan;
  margin-bottom: 20px;
  filter: brightness(1.2);
`;

export const DetailImagesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (max-width: 768px) { 
    flex-direction: column; 
    align-items: center;
  }
`;


export const SmallDetailImage = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
  border: 2px solid cyan;
  border-radius: 10px;
  filter: brightness(1.2);
 @media (max-width: 768px) { 
    width: 80%; 
  }
`;


export const EquipmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const EquipmentItem = styled.li`
  background-color: darkcyan;
  color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  text-transform: uppercase;
`;

export const CloseButton = styled.button`
  background-color: darkcyan;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: cyan;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5em;
  margin-bottom: 0.5em;
  margin-top: 1em;
  font-weight: 600; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  padding-bottom: 0.3em; 
`;

export const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2em;
  margin-bottom: 2em;
  line-height: 1.6; 
  max-width: 900px; 
  margin-left: auto; 
  margin-right: auto; 
  border-top: 1px solid cyan; 
  padding-top: 0.6em; 
  border-bottom: 1px solid cyan; 
  padding-bottom: 0.6em; 
`;


