import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "../../pages/homepage";
import RegisterPage from "../../pages/registerpage";
import LoginPage from '../../pages/loginpage';
import MyTrainings from '../../pages/mytrainings';

const Router = ({ isAuthenticated,
    setIsAuthenticated, handleLogout
}) =>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage handleLogout={handleLogout} isAuthenticated={isAuthenticated} />} />
            <Route path="/register" element={<RegisterPage isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
            <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/mytrainings" element={<MyTrainings isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
        </Routes>
    </BrowserRouter >
    ;

export default Router;