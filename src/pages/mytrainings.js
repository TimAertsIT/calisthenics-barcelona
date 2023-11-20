import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Trainings from '../components/MyTrainings/MyTrainings';

function MyTrainings({ isAuthenticated, handleLogout }) {

    return (
        <div>
            <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Trainings isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        </div>
    );
}

export default MyTrainings;