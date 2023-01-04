import React from 'react';
import Critter from './Critter'

function Critters({ selectedCritters, setSelectedCritter, setEditBoxToggle }) {

    // const [selectedCritter, setSelectedCritter] = useState([])

    return(
        <div className="critters">
                {selectedCritters.map((critter) => (
                    <Critter
                        key={critter.id}
                        critter={critter}
                        setSelectedCritter={setSelectedCritter}
                        setEditBoxToggle={setEditBoxToggle}
                    />
                ))}
        </div> 
    )
}

export default Critters;