import React from 'react';

function CritterDD({ critter }) {

    return (
        <option value={critter.id}>{critter.critter_name}</option>
    )
}

export default CritterDD;