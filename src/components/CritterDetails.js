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

    function handleSubmit(e) {
        e.preventDefault()
        console.log("form submitted")
        //     fetch(`${baseURL}${selectedCritter.id}`, {
        //         method: "PATCH",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             body: critterFoodDetails,
        //         }),
        //     })
        // .then((r) => r.json())
        // .then((details) => console.log(details));
    }   

    function handleChange(e) {
        setCritterFoodDetails({...critterFoodDetails, [e.target.name]: e.target.value});
        console.log(critterFoodDetails)
    }

    return(
        <div className="critter-details">
            <form className="critter-details-form" onSubmit={handleSubmit}>
                <p><b>Critter species:</b> {selectedCritter.critter_name}</p>
                <p><b>Critter type:</b> {selectedCritter.critter_type}</p>
                <p><b>Environment name:</b> {critterEnvDetails.environment_name}</p>
                <p><b>Water temperature:</b> {critterEnvDetails.water_temperature}deg F</p>
                <div>
                    <label><b>Food name:</b> </label>
                    <input 
                        value={critterFoodDetails.food_name}
                        onChange={handleChange}
                        type="string" 
                        className="food_name" 
                        name="food_name" 
                    />
                </div>
                <div>
                    <label><b>Food type:</b> </label>
                    <input 
                        value={critterFoodDetails.food_type}
                        onChange={handleChange}
                        type="string" 
                        className="food_type" 
                        name="food_type" 
                    />
                </div>
                <button type='submit' className="submit">Submit</button>
            </form>
        </div> 
    )
}

export default CritterDetails;