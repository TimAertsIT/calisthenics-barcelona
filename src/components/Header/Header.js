import { StyledHeader } from "./Header.styles";

const Header = ({ isAuthenticated, handleLogout }) => {
    return (
        <StyledHeader>
            <h1>Calisthenics Barcelona</h1>
        </StyledHeader>
    );
}

export default Header;