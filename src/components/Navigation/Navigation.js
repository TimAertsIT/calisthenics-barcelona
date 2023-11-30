import { NavigationWrapper, StyledDiv, StyledLink } from './Navigation.styles';
import { Link } from 'react-router-dom';

const Navigation = ({ isAuthenticated, handleLogout }) => {
    const handleMyTrainingsClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();
            alert('Please login first.');
        }
    }

    return (
        <NavigationWrapper>
            <StyledLink as={Link} to="/" className="home-link">Homepage</StyledLink>
            <StyledDiv>
                <StyledLink as={Link} to="/register">Register</StyledLink>
                {isAuthenticated ? (
                    <StyledLink as="a" href="#" onClick={handleLogout}>
                        Logout
                    </StyledLink>
                ) : (
                    <StyledLink as={Link} to="/login">
                        Login
                    </StyledLink>
                )}
                <StyledLink as={Link} to="/mytrainings" onClick={handleMyTrainingsClick}>My Trainings</StyledLink>
            </StyledDiv>
        </NavigationWrapper>
    );
}

export default Navigation;



