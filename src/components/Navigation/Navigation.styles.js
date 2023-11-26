import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 9999;
  background: linear-gradient(to left, #008080, #00FFFF);
`;

export const StyledLink = styled.a`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
margin-right: 15px;
  &:hover {
    color: darkblue;
  }
  &.home-link {
    margin-right: auto;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;


