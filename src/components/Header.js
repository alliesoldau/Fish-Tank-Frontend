import React from 'react';

function Header({ setSelectedEnvironment }) {

    function onSelectEnvironment(e) {
        setSelectedEnvironment(e.target.value)
    }

    return(
        <div className="Header">
            <header>
                <h1>Tank Environment:</h1>
                    <div className="tank-environment-selector">
                        <input type="radio" value="brackish" name="environment" onChange={onSelectEnvironment}/>
                            <label>Brackish</label>
                        <input type="radio" value="salt" name="environment" onChange={onSelectEnvironment}/>
                            <label>Salt</label>
                        <input type="radio" value="fresh" name="environment" onChange={onSelectEnvironment}/>
                            <label>Fresh</label>
                    </div>
            </header>
        </div> 
    )
}

export default Header;