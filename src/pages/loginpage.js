import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login";
import Navigation from "../components/Navigation/Navigation";


const LoginPage = ({ isAuthenticated, setIsAuthenticated, handleLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/register');
        }
    }, [isAuthenticated, navigate]);
    return (
        <div>
            <Navigation />
            <Login setIsAuthenticated={setIsAuthenticated} handleLogout={handleLogout} />
        </div>);
};
export default LoginPage;