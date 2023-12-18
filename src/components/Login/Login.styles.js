import { styled } from 'styled-components';

export const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 500px;
  padding: 20px;
`;

export const StyledH1 = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledP = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  font-size: 1.1em;
`;

export const StyledInput = styled.input`
  border-bottom: 2px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center; 
  font-size: 1em;
  border-radius: 10px; 
  &:focus {
    border-color: cyan;
    outline: none;
  }
`;

export const StyledButton = styled.button`
    width: 100%;
  padding: 15px;
  font-size: 1em;
  margin-top: 20px;
  background-color: darkcyan; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  transition: background-color 0.5s ease; 
  &:hover {
    background-color: cyan; 
    color: black;
  }
`;
