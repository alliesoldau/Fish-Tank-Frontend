import React from 'react';

function FoodDD({ food }) {

    return (
        <option value={food.id}>{food.food_name}</option>
    )
}

export default FoodDD;