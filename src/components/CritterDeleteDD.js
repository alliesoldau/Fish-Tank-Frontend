import React from 'react';

function CritterDeleteDD({ critter }) {

    return (
        <option value={critter.id}>{critter.critter_name}</option>
    )
}

export default CritterDeleteDD;