import styled from 'styled-components';

export const Park = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ParkName = styled.h2`
  color: #333;
`;

export const ParkImage = styled.img`
  max-width: 200px;
`;

export const ParksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 1em; 
`;
