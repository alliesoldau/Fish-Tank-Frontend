import React, { useState, useEffect } from 'react';
import Critters from './Critters';

function FishTank({ baseURL, selectedEnvironment, setSelectedCritter, setEditBoxToggle }) {

    const [selectedCritters, setSelectedCritters] = useState([])

    useEffect(() => {
        fetch(`${baseURL}${selectedEnvironment}`)
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

    function handleAddFish() {
        setEditBoxToggle("addaFish")
    }

    function handleDeleteFish() {
        setEditBoxToggle("deleteaFish")
    } 

    function handleAddFood() {
        setEditBoxToggle("addafood")
    } 

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
                    setEditBoxToggle={setEditBoxToggle}
                />
                <div className="add-fish-button-container">
                    <button className="add-fish_button" onClick={handleAddFish}>Add Fish</button>
                    <button className="delete-fish_button" onClick={handleDeleteFish}>Delete a Fish</button>
                    <button className="add-food-button" onClick={handleAddFood}>Add a Food</button>

                </div>
            </div> 
        </div>
    )
}

export default FishTank;