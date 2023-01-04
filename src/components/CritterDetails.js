import React, { useState, useEffect } from 'react';

function CritterDetails({ baseURL, selectedCritter }) {

    const [critterFoodDetails, setCritterFoodDetails] = useState([])
    const [critterEnvDetails, setCritterEnvDetails] = useState([])

    useEffect(() => {
        fetch(`${baseURL}food/${selectedCritter.food_id}`)
        .then((r) => r.json())
        .then((food) => setCritterFoodDetails(food));

        fetch(`${baseURL}environment/${selectedCritter.environment_id}`)
        .then((r) => r.json())
        .then((food) => setCritterEnvDetails(food));
    },[selectedCritter])

    return(
        <div className="critter-details">
            <p>Critter species: {selectedCritter.critter_name}</p>
            <p>Critter type: {selectedCritter.critter_type}</p>
            <p>Food name: {critterFoodDetails.food_name}</p>
            <p>Food type: {critterFoodDetails.food_type}</p> 
            <p>Environment name: {critterEnvDetails.environment_name}</p>
            <p>Water temperature: {critterEnvDetails.water_temperature}</p>
        </div> 
    )
}

export default CritterDetails;