import Register from "../components/Register/Register";
import Navigation from "../components/Navigation/Navigation";

const RegisterPage = ({ isAuthenticated, handleLogout }) => {
    return (
        <div>
            <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Register />
        </div>
    );
};
export default RegisterPage;