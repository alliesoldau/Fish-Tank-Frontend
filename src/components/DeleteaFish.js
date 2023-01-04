import React from 'react';

function DeleteaFish({ setEditBoxToggle, deleteaFishToggle }) {

    function handleSubmit() {
        setEditBoxToggle("")
    }

    return (
        <div className="deletea-fish" style={{ display: (deleteaFishToggle ? 'block' : 'none') }}>
            <form className="deletea-fish-form" onSubmit={handleSubmit}>
                <p>delete a fish</p>
                <button type='submit' className="submit">DELETE</button>
            </form>
        </div>
    )
}

export default DeleteaFish;