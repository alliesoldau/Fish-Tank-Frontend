import React, { useState, useEffect } from 'react';
import Critters from './Critters';

function FishTank({ selectedEnvironment }) {

    const [selectedCritters, setSelectedCritters] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/${selectedEnvironment}`)
        .then((r) => r.json())
        .then((critters) => setSelectedCritters(critters));
    }, [selectedEnvironment])

    console.log(selectedCritters)

    return(
        <div className="fish-tank-container">
            <div className="base-fish-tank">
                <Critters 
                    selectedCritters={selectedCritters}
                />
            </div> 
        </div>
    )
}

export default FishTank;