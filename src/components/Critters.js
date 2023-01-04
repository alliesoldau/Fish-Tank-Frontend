import React from 'react';
import Critter from './Critter'

function Critters({ selectedCritters, setSelectedCritter }) {

    // const [selectedCritter, setSelectedCritter] = useState([])

    return(
        <div className="critters">
            {/* <p>Selected Critter: selectedCritter</p> */}
            <ul>
                {selectedCritters.map((critter) => (
                    <Critter
                        key={critter.id}
                        critter={critter}
                        setSelectedCritter={setSelectedCritter}
                    />
                ))}
            </ul>
        </div> 
    )
}

export default Critters;