import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "../../pages/homepage";
import RegisterPage from "../../pages/registerpage";
import LoginPage from '../../pages/loginpage';

const Router = ({ isAuthenticated,
    setIsAuthenticated, handleLogout
}) =>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage handleLogout={handleLogout} isAuthenticated={isAuthenticated} />} />
            <Route path="/register" element={<RegisterPage isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
            <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
    </BrowserRouter >
    ;

export default Router;