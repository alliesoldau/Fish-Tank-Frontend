import React from 'react';
import Critter from './Critter'

function Critters({ selectedCritters }) {

    return(
        <div className="Critters">
            <p>Critters</p>
            <ul>
                {selectedCritters.map((critter) => (
                    <Critter
                        key={critter.id}
                        critter={critter}
                    />
                ))}
            </ul>
        </div> 
    )
}

export default Critters;