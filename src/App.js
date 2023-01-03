import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import FishTank from './components/FishTank'


function App() {

  const baseURL = "http://localhost:9292/"
  const [selectedEnvironment, setSelectedEnvironment] = useState("")

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
        />
      </div>
    </div>
  );
}

export default App;
