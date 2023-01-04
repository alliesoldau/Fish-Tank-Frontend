import React, { useState, useEffect } from 'react';
import FoodDD from './FoodDD';

function CritterDetails({ baseURL, selectedCritter }) {

    console.log(selectedCritter)

    const [updatedCritter, setUpdatedCritter] = useState(selectedCritter)
    const [allFoodInfo, setAllFoodInfo] = useState([])
    const [critterFoodDetails, setCritterFoodDetails] = useState([])
    const [critterEnvDetails, setCritterEnvDetails] = useState([])
    const [newFoodId, setNewFoodId] = useState(0)

    // console.log(updatedCritter)

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
    },[selectedCritter])

    const foodDD = allFoodInfo.map((food) => {
        return(
            <FoodDD
                key={food.food_id}
                food={food}
            />
        )
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log("form submitted")
            fetch(`${baseURL}critter/${selectedCritter.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    body: updatedCritter,
                }),
            })
        .then((r) => r.json())
        .then((details) => console.log(details));
    }   

    function handleChange(e) {
        if (e.target.value === "flakes") {
            setNewFoodId(1)
        } else if (e.target.value === "shrimp") {
            setNewFoodId(2)
        } else if (e.target.value === "crab") {
            setNewFoodId(3)
        } else if (e.target.value === "worms") {
            setNewFoodId(4)
        } else if (e.target.value === "algae") {
            setNewFoodId(5)
        } else if (e.target.value === "detritus") {
            setNewFoodId(6)
        }
        setUpdatedCritter({...updatedCritter, ["food_id"]: newFoodId})
        console.log(updatedCritter)
    }

    return(
        <div className="critter-details">
            <form className="critter-details-form" onSubmit={handleSubmit}>
                <p><b>Critter species:</b> {selectedCritter.critter_name}</p>
                <p><b>Critter type:</b> {selectedCritter.critter_type}</p>
                <p><b>Environment name:</b> {critterEnvDetails.environment_name}</p>
                <p><b>Water temperature:</b> {critterEnvDetails.water_temperature}deg F</p>
                <label><b>Food name:</b> </label>
                    <select
                        onChange={handleChange}
                        name='food_name' 
                        id='food_name'>
                            <option className="food_name">FOOD</option>
                            {foodDD}
                    </select>
                <p><b>Food type:</b> {critterFoodDetails.food_type}</p>
                <button type='submit' className="submit">Submit</button>
            </form>
        </div> 
    )
}

export default CritterDetails;