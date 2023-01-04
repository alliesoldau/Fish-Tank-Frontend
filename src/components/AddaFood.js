import React, { useState } from 'react';

function AddaFood({ baseURL, setEditBoxToggle, addaFoodToggle }) {

    const [newFood, setNewFood] = useState({
        food_name: "",
        food_type: ""
    })

    function handleChange(e) {
        setNewFood({...newFood, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(newFood)

        fetch(`${baseURL}/foods`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
              body: JSON.stringify({
                food_name: newFood.food_name,
                food_type: newFood.food_type,
        })
    })
        setEditBoxToggle("")
    }

    return (
        <div className="adda-food" style={{ display: (addaFoodToggle ? 'block' : 'none') }}>
            <form className="adda-fish-form" onSubmit={handleSubmit}>
                <p>add a food</p>
                <div>
                    <label><b>Food name: </b></label>
                    <input 
                        type="text"
                        name="food_name"
                        value={newFood.food_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label><b>Food type: </b></label>
                    <select 
                        type="text"
                        name="food_type"
                        value={newFood.food_type}
                        onChange={handleChange}> 
                            <option>freeze_dried</option>    
                            <option>live</option> 
                            <option>detritus</option>                  
                    </select>
                </div>
                <button type='submit' className="submit">Add</button>
            </form>
        </div>
    )
}

export default AddaFood;