import React, { useState } from 'react';
import Parks from "../components/Parks/Parks";
import Exercises from "../components/Exercises/Exercises";
import ParksMap from "../components/Parksmap/Parksmap";
import Navigation from '../components/Navigation/Navigation';

function Homepage({ isAuthenticated, handleLogout }) {
    const [selectedPark, setSelectedPark] = useState(null);

    return (
        <div>
            <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <h1>Parks</h1>
            <Parks selectedPark={selectedPark} setSelectedPark={setSelectedPark} />
            <h1>Exercises</h1>
            <Exercises selectedPark={selectedPark} />
            <ParksMap />
        </div>
    );
}

export default Homepage;
