import { NavigationWrapper, StyledDiv } from './Navigation.styles';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Navigation = ({ isAuthenticated, handleLogout }) => {
    return (
        <NavigationWrapper>
            <StyledDiv>
                <Link to="/">Homepage</Link>
                <Link to="/register">Register Page</Link>
                <Link to="/login">Login Page</Link>
            </StyledDiv>
        </NavigationWrapper>
    );
}

export default Navigation;