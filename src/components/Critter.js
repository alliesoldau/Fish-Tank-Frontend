import React from 'react';

function Critter({ critter }) {

    return(
        <div className="Critter">
            <p>{critter.critter_name}</p>
        </div> 
    )
}

export default Critter;