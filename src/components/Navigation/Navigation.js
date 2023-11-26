import { NavigationWrapper, StyledDiv, StyledLink } from './Navigation.styles';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Navigation = ({ isAuthenticated, handleLogout }) => {
    const handleMyTrainingsClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();
            alert('Please login first.');
        }
    }

    return (
        <NavigationWrapper>
            <StyledLink to="/" className="home-link">Homepage</StyledLink>
            <StyledDiv>
                <StyledLink to="/register">Register</StyledLink>
                {isAuthenticated ? (
                    <StyledLink as="a" href="#" onClick={handleLogout}>
                        Logout
                    </StyledLink>
                ) : (
                    <StyledLink to="/login">
                        Login
                    </StyledLink>
                )}
                <StyledLink to="/mytrainings" onClick={handleMyTrainingsClick}>My Trainings</StyledLink>
            </StyledDiv>
        </NavigationWrapper>
    );
}

export default Navigation;


