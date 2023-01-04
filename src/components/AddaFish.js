import React, { useState, useEffect} from 'react';
import CritterDD from './CritterDD';

function AddaFish({ setEditBoxToggle, baseURL, addaFishToggle, selectedEnvironment, setReload }) {

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


    console.log(tankID)

    useEffect(() => {
        fetch(`${baseURL}${selectedEnvironment}/critters`)
        .then((r) => r.json())
        .then((critters) => setCritterList(critters));
    },[selectedEnvironment])

    const critterDD = critterList.map((critter) => {
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
        e.preventDefault()
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
        .then((details) => console.log(details));
        setEditBoxToggle("")
        setReload(true)
    }


    return (
        <div className="adda-fish" style={{ display: (addaFishToggle ? 'block' : 'none') }}>
            <form className="adda-fish-form" onSubmit={handleSubmit}>
                <p>add a fish</p>
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