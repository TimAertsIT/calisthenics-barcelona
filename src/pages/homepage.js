import React, { useState } from 'react';
import Parks from "../components/Parks/Parks";
import Exercises from "../components/Exercises/Exercises";
import ParksMap from "../components/Parksmap/Parksmap";
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';

function Homepage({ isAuthenticated, handleLogout }) {
    const [selectedPark, setSelectedPark] = useState(null);

    return (
        <div>
            <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Parks selectedPark={selectedPark} setSelectedPark={setSelectedPark} />
            <Exercises selectedPark={selectedPark} isAuthenticated={isAuthenticated} />
            <ParksMap />
        </div>
    );
}

export default Homepage;
