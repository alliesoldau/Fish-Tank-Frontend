import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import FishTank from './components/FishTank'
import CritterDetails from './components/CritterDetails'

function App() {

  const baseURL = "http://localhost:9292/"
  const [selectedEnvironment, setSelectedEnvironment] = useState("")
  const [selectedCritter, setSelectedCritter] = useState([])

  useEffect(() => {
    console.log(selectedCritter.critter_name)
  },[selectedCritter])


  return (
    <div className="App">
      <div className="app-container">
        <Header 
          setSelectedEnvironment = {setSelectedEnvironment}
          selectedEnvironment = {selectedEnvironment}
        />
        <FishTank 
          baseURL = {baseURL}
          selectedEnvironment = {selectedEnvironment}
          setSelectedCritter = {setSelectedCritter}
        />
        <CritterDetails
          selectedCritter={selectedCritter}
        />
      </div>
    </div>
  );
}

export default App;
