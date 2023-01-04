import React from 'react';

function AddaFood({ setEditBoxToggle, addaFoodToggle }) {

    function handleSubmit() {
        setEditBoxToggle("")
    }

    return (
        <div className="adda-food" style={{ display: (addaFoodToggle ? 'block' : 'none') }}>
            <form className="adda-fish-form" onSubmit={handleSubmit}>
                <p>add a food</p>
                <button type='submit' className="submit">Add</button>
            </form>
        </div>
    )
}

export default AddaFood;