import React, { useState, useEffect } from 'react';
import FoodDD from './FoodDD';

function AddaFishToEv({ baseURL, setEditBoxToggle, addaFishToEnvToggle }) {

    const [allFoodInfo, setAllFoodInfo] = useState([])

    const [newCritter, setNewCritter] = useState({
        critter_name: "",
        critter_type: "",
        food_id: "",
        environment_id: ""
    })

    useEffect(() => {
        fetch(`${baseURL}food`)
        .then((r) => r.json())
        .then((food) => setAllFoodInfo(food));
    },[])

    const foodDD = allFoodInfo.map((food) => {
        return(
            <FoodDD
                key={food.food_id}
                food={food}
            />
        )
    })

    function handleChange(e) {
        setNewCritter({...newCritter, [e.target.name]: e.target.value})
        console.log(newCritter)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`${baseURL}/critters`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
              body: JSON.stringify({
                critter_name: newCritter.critter_name,
                critter_type: newCritter.critter_type,
                food_id: newCritter.food_id,
                environment_id: newCritter.environment_id
        })
    })
        setEditBoxToggle("")
    }

    return (
        <div className="adda-fish-to-env" style={{ display: (addaFishToEnvToggle ? 'block' : 'none') }}>
            <p>add a fish to env</p>
            <form className="adda-fish-to-env-form" onSubmit={handleSubmit}>
                <p><i>Add a Fish Option for an Environment</i></p>
                <div>
                    <label><b>Critter name: </b></label>
                    <input 
                        type="text"
                        name="critter_name"
                        value={newCritter.critter_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label><b>Critter type: </b></label>
                    <select 
                        type="text"
                        name="critter_type"
                        value={newCritter.critter_type}
                        onChange={handleChange}> 
                            <option>fish</option>    
                            <option>shark</option> 
                            <option>shrimp</option> 
                            <option>crab</option>
                            <option>frog</option> 
                            <option>star</option>                                  
                    </select>
                </div>
                <div>
                <label><b>Food name:</b> </label>
                    <select
                        onChange={handleChange}
                        name='food_id' 
                        id='food_id'>
                            {foodDD}
                    </select>
                </div>
                <div>
                <label><b>Environment type:</b> </label>
                    <select
                        onChange={handleChange}
                        name='environment_id' 
                        id='environment_id'>
                            <option value="1">brackish</option>
                            <option value="2">salt</option>
                            <option value="3">fresh</option>
                    </select>
                </div>
                <button type='submit' className="submit">Add Critter</button>
            </form>
            </div>
    )
}

export default AddaFishToEv;