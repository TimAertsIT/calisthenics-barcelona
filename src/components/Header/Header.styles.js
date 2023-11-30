import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url('${process.env.PUBLIC_URL}/assets/images/whotel.JPG') no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        filter: blur(2px);
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5); // adjust the last value as needed
        z-index: -1;
    }

    h1 {
        color: white; 
        font-size: 3em; 
        font-weight: bold;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: 'Arial', sans-serif; 
        text-align: center;
        padding: 0 10px;

        @media (max-width: 600px) {
            font-size: 2em;
        }
    }
`;



