import React, { useState, useEffect } from 'react';
import FoodDD from './FoodDD';

function CritterDetails({ baseURL, selectedEnvironment, selectedCritter, detailsToggle }) {

    const [allFoodInfo, setAllFoodInfo] = useState([])
    const [critterFoodDetails, setCritterFoodDetails] = useState([])
    const [critterEnvDetails, setCritterEnvDetails] = useState([])
    const [newFoodId, setNewFoodId] = useState(0)

    useEffect(() => {
        fetch(`${baseURL}food/${selectedCritter.food_id}`)
        .then((r) => r.json())
        .then((food) => setCritterFoodDetails(food));

        fetch(`${baseURL}environment/${selectedCritter.environment_id}`)
        .then((r) => r.json())
        .then((food) => setCritterEnvDetails(food));

        fetch(`${baseURL}food`)
        .then((r) => r.json())
        .then((food) => setAllFoodInfo(food));
    }, [selectedCritter, selectedEnvironment])

    const foodDD = allFoodInfo.map((food) => {
        return(
            <FoodDD
                key={food.food_id}
                food={food}
            />
        )
    })

    function handleChange(e) {
        setNewFoodId(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("form submitted")
            fetch(`${baseURL}critter/food_update/${selectedCritter.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    food_id: newFoodId,
                }),
            })
        .then((r) => r.json())
        .then((details) => console.log(details));
        alert("Food preference has been updated")
    }   

    return(

        <div className="critter-details" style={{ display: (detailsToggle ? 'block' : 'none') }}>
            <form className="critter-details-form" onSubmit={handleSubmit}>
                <p><i>Details of Selected Critter</i></p>
                <p><b>Critter species:</b> {selectedCritter.critter_name}</p>
                <p><b>Critter type:</b> {selectedCritter.critter_type}</p>
                <p><b>Environment name:</b> {critterEnvDetails.environment_name}</p>
                <p><b>Water temperature:</b> {critterEnvDetails.water_temperature}deg F</p>
                <label><b>Food name:</b> </label>
                    <select
                        onChange={handleChange}
                        name='food_name' 
                        id='food_name'>
                            <option className="food_name">{critterFoodDetails.food_name}</option>
                            {foodDD}
                    </select>
                <p><b>Food type:</b> {critterFoodDetails.food_type}</p>
                <button type='submit' className="submit">Submit</button>
            </form>
        </div> 
    )
}

export default CritterDetails;