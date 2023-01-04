import React from 'react';

function Critter({ critter, setSelectedCritter, setEditBoxToggle }) {

    function revealCritterDetails() {
        setEditBoxToggle("critterDetails")
        setSelectedCritter(critter)
    }

    return(
        <div className="critter">
            <p>{critter.critter_name}</p>
            <button className="critter-button" onClick={revealCritterDetails}>BUTTON</button>
        </div> 
    )
}

export default Critter;