import React, { useState, useEffect } from 'react';
import CritterDeleteDD from './CritterDeleteDD'

function DeleteaFish({ baseURL, selectedEnvironment, reload, setReload, setEditBoxToggle, deleteaFishToggle }) {

    const [fishToDelete, setFishToDelete] = useState(0)
    const [critterList, setCritterList] = useState([])


    useEffect(() => {
        fetch(`${baseURL}${selectedEnvironment}/tank/critters`)
        .then((r) => r.json())
        .then((critters) => setCritterList(critters));
    },[selectedEnvironment])

    const critterDeleteDD = critterList.map((critter) => {
        return(
            <CritterDeleteDD
                key={critter.id}
                critter={critter}
            />
        )
    })

    function handleChange(e) {
        setFishToDelete(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`${baseURL}critter/delete/${fishToDelete}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((RIPfish) => console.log(RIPfish));

        setEditBoxToggle("")
        setReload(!reload)
    }

    return (
        <div className="deletea-fish" style={{ display: (deleteaFishToggle ? 'block' : 'none') }}>
            <form className="deletea-fish-form" onSubmit={handleSubmit}>
                <p>delete a fish</p>
                <label><b>Critters:</b> </label>
                <select
                    onChange={handleChange}
                    name='critter_name' 
                    id='critter_name'>
                        <option className="critter_name">Critters</option>
                        {critterDeleteDD}
                </select>
                <button type='submit' className="submit">DELETE</button>
            </form>
        </div>
    )
}

export default DeleteaFish;