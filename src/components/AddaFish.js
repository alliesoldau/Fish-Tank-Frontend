import React from 'react';

function AddaFish({ setEditBoxToggle, addaFishToggle }) {

    function handleSubmit() {
        setEditBoxToggle("")
    }

    return (
        <div className="adda-fish" style={{ display: (addaFishToggle ? 'block' : 'none') }}>
            <form className="adda-fish-form" onSubmit={handleSubmit}>
                <p>add a fish</p>
                <button type='submit' className="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddaFish;