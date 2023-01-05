import React, { useState, useEffect} from 'react';
import CritterDD from './CritterDD';

function AddaFish({ setEditBoxToggle, baseURL, addaFishToggle, selectedEnvironment, truncatedCritterList, setTruncatedCritterList, handleAddFishToTank }) {

    const [critterList, setCritterList] = useState([])
    const [fishToAdd, setFishToAdd] = useState(0)
    const [tankID, setTankID] = useState(0)

    useEffect(() => {
        if (selectedEnvironment === 'brackish') {
            setTankID(1)
        } else if (selectedEnvironment === 'salt') {
            setTankID(2)
        } else if (selectedEnvironment === 'fresh') {
            setTankID(3)
        }
    },[selectedEnvironment])

    useEffect(() => {
        fetch(`${baseURL}${selectedEnvironment}/critters`)
        .then((r) => r.json())
        .then((critters) => setCritterList(critters));
    },[selectedEnvironment])

    useEffect(() => {
        fetch(`${baseURL}${selectedEnvironment}/tank/unusedCritters`)
        .then((r) => r.json())
        .then((critters) => setTruncatedCritterList(critters));
    },[critterList])

    const critterDD = truncatedCritterList.map((critter) => {
        return(
            <CritterDD
                key={critter.id}
                critter={critter}
            />
        )
    })

    function handleChange(e) {
        setFishToAdd(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        
            fetch(`${baseURL}/critter/${fishToAdd}`)
            .then((r) => r.json())
            .then((critter) => handleAddFishToTank(critter));

            fetch(`${baseURL}critter/tank_update/${fishToAdd}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mytank_id: tankID,
                }),
            })
        .then((r) => r.json())
        setEditBoxToggle("")
    }

    return (
        <div className="adda-fish" style={{ display: (addaFishToggle ? 'block' : 'none') }}>
            <form className="adda-fish-form" onSubmit={handleSubmit}>
                <p><i>Add a Fish to this Tank</i></p>
                <label><b>Critters:</b> </label>
                    <select
                        onChange={handleChange}
                        name='critter_name' 
                        id='critter_name'>
                            <option className="critter_name">Critters</option>
                            {critterDD}
                    </select>
                <button type='submit' className="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddaFish;