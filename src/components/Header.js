import React from 'react';

function Header({ setSelectedEnvironment }) {

    function onSelectEnvironment(e) {
        setSelectedEnvironment(e.target.value)
    }

    return(
        <div className="header">
            <h3>Tank Environment:</h3>
                <div className="tank-environment-selector">
                    <div className="header-selector-container">
                        <input type="radio" value="brackish" name="environment" onChange={onSelectEnvironment}/>
                            <label>Brackish</label>
                    </div>
                    <div className="header-selector-container">
                        <input type="radio" value="salt" name="environment" onChange={onSelectEnvironment}/>
                            <label>Salt</label>
                    </div>
                    <div className="header-selector-container">
                        <input type="radio" value="fresh" name="environment" onChange={onSelectEnvironment}/>
                            <label>Fresh</label>
                    </div>
                </div>
        </div> 
    )
}

export default Header;