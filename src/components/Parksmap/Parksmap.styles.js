import styled from 'styled-components';
import { Popup } from 'react-leaflet';
import { ParkImage } from '../Parks/Parks.styles';

export const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    width: 200px; 
    height: 200px; 
    position: relative; 
  }
`;

export const StyledParkImage = styled(ParkImage)`
  max-width: 100%; 
  max-height: 100%; 
  position: absolute;
  top: 0; 
`;

export const ParkName = styled.h3`
  position: absolute; 
  top: 0px; 
  left: 0px; 
  color: white; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  z-index: 10; 
  padding: 10px; 
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)); 
`;



export const MapWrapper = styled.div`
    margin-top: 20px; 
    margin-bottom: 50px; 
    width: 500px;
    height: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    
    @media (max-width: 600px) {
        width: 100%;
        height: 300px; 
    }
`;