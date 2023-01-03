import React from 'react';

function Critter({ critter, setSelectedCritter }) {

    function revealCritterDetails() {
        setSelectedCritter(critter)
    }

    return(
        <div className="Critter">
            <p>{critter.critter_name}</p>
            <button onClick={revealCritterDetails}>BUTTON</button>
        </div> 
    )
}

export default Critter;