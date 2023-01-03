import React from 'react';

function CritterDetails({ selectedCritter }) {

    console.log(selectedCritter.critter_name)
    console.log(selectedCritter.critter_type)
    console.log(selectedCritter.food.food_name)
    console.log(selectedCritter.food.food_type)
    console.log(selectedCritter.environment.environment_name)
    console.log(selectedCritter.environment.water_type)
    console.log(selectedCritter.environment.water_temperature)

    return(
        <div className="critter-details">
            <p>{selectedCritter.critter_name}</p>
            <p>{selectedCritter.critter_type}</p>
            <p>{selectedCritter.food.food_name}</p>
            <p>{selectedCritter.food.food_type}</p>
            <p>{selectedCritter.environment.environment_name}</p>
            <p>{selectedCritter.environment.water_type}</p>
            <p>{selectedCritter.environment.water_temperature}</p>
        </div> 
    )
}

export default CritterDetails;