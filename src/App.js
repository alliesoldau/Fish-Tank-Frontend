import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import FishTank from './components/FishTank'
import CritterDetails from './components/CritterDetails'
import AddaFishToEnv from './components/AddaFishToEnv'
import AddaFish from './components/AddaFish'
import DeleteaFish from './components/DeleteaFish'
import AddaFood from './components/AddaFood'

function App() {

  const baseURL = "http://localhost:9292/"
  const [selectedEnvironment, setSelectedEnvironment] = useState("")
  const [selectedCritter, setSelectedCritter] = useState([])
  const [selectedCritters, setSelectedCritters] = useState([])
  const [editBoxToggle, setEditBoxToggle] = useState("")
  const [detailsToggle, setDetailsToggle] = useState(false)
  const [addaFishToEnvToggle, setAddaFishToEnvToggle] = useState(false)
  const [addaFishToggle, setAddaFishToggle] = useState(false)
  const [deleteaFishToggle, setDeleteaFishToggle] = useState(false)
  const [addaFoodToggle, setAddaFoodToggle] = useState(false)
  const [truncatedCritterList, setTruncatedCritterList] = useState([])



  useEffect(() => {
    if (editBoxToggle === "critterDetails") {
      setDetailsToggle(true)
      setAddaFishToEnvToggle(false)
      setAddaFishToggle(false)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(false)
    } else if (editBoxToggle === "addaFishToEnv") {
      setDetailsToggle(false)
      setAddaFishToEnvToggle(true)
      setAddaFishToggle(false)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(false)
    } else if (editBoxToggle === "addaFish") {
      setDetailsToggle(false)
      setAddaFishToEnvToggle(false)
      setAddaFishToggle(true)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(false)
    } else if (editBoxToggle === "deleteaFish") {
      setDetailsToggle(false)
      setAddaFishToEnvToggle(false)
      setAddaFishToggle(false)
      setDeleteaFishToggle(true)
      setAddaFoodToggle(false)
    } else if (editBoxToggle === "addafood") {
      setDetailsToggle(false)
      setAddaFishToEnvToggle(false)
      setAddaFishToggle(false)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(true)
    } else {
      setDetailsToggle(false)
      setAddaFishToEnvToggle(false)
      setAddaFishToggle(false)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(false)
    }
  },[editBoxToggle])

  function handleAddFishToTank(addMeToTank) {
    setSelectedCritters([...selectedCritters, addMeToTank])
  }

  function handleNewCritterInEnv(newCritter) { 
    setTruncatedCritterList([...truncatedCritterList, newCritter])
  }

  function handleDeleteFishFromTank() {
    fetch(`${baseURL}${selectedEnvironment}`)
        .then((r) => r.json())
        .then((critters) => setSelectedCritters(critters));
  }

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
          setEditBoxToggle={setEditBoxToggle}
          selectedCritters={selectedCritters}
          setSelectedCritters={setSelectedCritters}
        />
        <div className="forms-container">
          <CritterDetails
            baseURL = {baseURL}
            selectedCritter={selectedCritter}
            detailsToggle={detailsToggle}
            selectedEnvironment={selectedEnvironment}
          />
          <AddaFishToEnv
            setEditBoxToggle={setEditBoxToggle}
            addaFishToEnvToggle={addaFishToEnvToggle}
            baseURL={baseURL} 
            handleNewCritterInEnv={handleNewCritterInEnv}
          />
          <AddaFish
            baseURL={baseURL}
            selectedEnvironment={selectedEnvironment}
            setEditBoxToggle={setEditBoxToggle}
            addaFishToggle={addaFishToggle}
            handleAddFishToTank={handleAddFishToTank}
            setTruncatedCritterList={setTruncatedCritterList}
            truncatedCritterList={truncatedCritterList}
          />
          <DeleteaFish
            baseURL = {baseURL}
            setEditBoxToggle={setEditBoxToggle}
            deleteaFishToggle={deleteaFishToggle}
            selectedEnvironment={selectedEnvironment}
            handleDeleteFishFromTank={handleDeleteFishFromTank}
          />
          <AddaFood
            setEditBoxToggle={setEditBoxToggle}
            addaFoodToggle={addaFoodToggle}
            baseURL={baseURL}  
          />
        </div>

      </div>
    </div>
  );
}

export default App;
