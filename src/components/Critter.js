import React, { useState } from 'react';

function Critter({ critter, setSelectedCritter, setEditBoxToggle }) {

    function revealCritterDetails() {
        setEditBoxToggle("critterDetails")
        setSelectedCritter(critter)
    }

    return(
        <div className="critter">
            <p>{critter.critter_name}</p>
            <div className={critter.critter_type} onClick={revealCritterDetails}></div>
        </div> 
    )
}

export default Critter;