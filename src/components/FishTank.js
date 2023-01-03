import React, { useState, useEffect } from 'react';
import Critters from './Critters';

function FishTank({ selectedEnvironment, setSelectedCritter }) {

    const [selectedCritters, setSelectedCritters] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/${selectedEnvironment}`)
        .then((r) => r.json())
        .then((critters) => setSelectedCritters(critters));
    }, [selectedEnvironment])

    // Map through the critter info to get the food name
    const selectedEnvFood = selectedCritters.map((critter) => (
        critter.food.food_name
    ))

    // Filter food to remove duplicates
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
        }
    const uniqueFoods = selectedEnvFood.filter(onlyUnique);

    return(
        <div className="fish-tank-container">
            <div className="fish-tank-header">
                <h3>{selectedEnvironment.toUpperCase()} FISH TANK</h3>
                <h4>Tank food requirements: </h4>
                <div className="foods-container">
                    {uniqueFoods.map((food) => (
                        <ul>{food}</ul>
                    ))}
                </div>
            </div>
            <div className="base-fish-tank">
                <Critters 
                    selectedCritters={selectedCritters}
                    setSelectedCritter={setSelectedCritter}
                />
            </div> 
        </div>
    )
}

export default FishTank;