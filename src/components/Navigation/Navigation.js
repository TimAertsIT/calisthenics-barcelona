import { NavigationWrapper, StyledDiv } from './Navigation.styles';
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
            <StyledDiv>
                <Link to="/">Homepage</Link>
                <Link to="/register"><p>Register</p></Link>
                {isAuthenticated ? (
                    <a href="#" onClick={handleLogout}>
                        Logout
                    </a>
                ) : (
                    <Link to="/login">
                        <p>Login</p>
                    </Link>
                )}
                <Link to="/mytrainings" onClick={handleMyTrainingsClick}>My Trainings</Link>
            </StyledDiv>
        </NavigationWrapper>
    );
}

export default Navigation;
