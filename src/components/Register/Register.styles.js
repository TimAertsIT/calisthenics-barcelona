import { styled } from 'styled-components';

export const StyledBackground = styled.div`
   margin-top: 20px; 
   background-color: #002400; 
  padding-top: 15px;
   padding-bottom: 15px; 
`;

export const StyledCard = styled.div`
   background-color: white; 
  border-radius: 20px;
  width: 50%; 
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px; 
  @media (max-width: 600px) {
    width: 85%;
  }
`;

export const StyledH1 = styled.h1`
 color: #002400; 
 padding-top: 30px; 
 padding-left: 25px;
 padding-right: 25px; 
 text-align: center;

`;

export const StyledP = styled.p`
 color: #002400; 
 padding-left: 25px;
 padding-right: 25px; 
 text-align: center;
 padding-top: 10px;
 margin-bottom: 40px;
`;

export const StyledInput = styled.input`
color: #002400; 
background-color: lightgrey; 
padding-left: 25px;
 padding-right: 25px; 
 margin-bottom: 25px;
 padding-top: 20px; 
 padding-bottom: 20px;
 border-radius: 25px; 
width: 80%;
margin-left: auto;
margin-right: auto; 
display: block;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
background-color: white;
color: darkgreen; 
border: 1px solid #002400;
   text-transform: uppercase;
   border-radius: 25px; 
   padding-top: 15px;
   padding-bottom: 15px;
   padding-left: 45px;
   padding-right: 45px;
   margin-bottom: 30px;
   margin-top: 30px;
   font-weight: bold;
   width: 90%;
   text-align: center;
   margin-left: 30px;

   transition: background-color .5s, color .5s;
   &:hover {
     background-color: darkgreen;
     color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: auto;
    margin-left: auto;
    display: block;
    margin-right: auto;
  }
`;

export const StyledForm = styled.form`
     width: 100%; 
`;