import styled from 'styled-components';

export const Exercise = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ExerciseName = styled.h2`
  color: #333;
`;

export const ExerciseImage = styled.img`
  max-width: 200px;
`;

export const ExercisesContainer = styled.div`
    display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 1em; 
`;

