import React from 'react';

function Critter({ critter, setSelectedCritter }) {

    function revealCritterDetails() {
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