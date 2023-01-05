import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import FishTank from './components/FishTank'
import CritterDetails from './components/CritterDetails'
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
  const [addaFishToggle, setAddaFishToggle] = useState(false)
  const [deleteaFishToggle, setDeleteaFishToggle] = useState(false)
  const [addaFoodToggle, setAddaFoodToggle] = useState(false)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    console.log(editBoxToggle)
    if (editBoxToggle === "critterDetails") {
      setDetailsToggle(true)
      setAddaFishToggle(false)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(false)
    } else if (editBoxToggle === "addaFish") {
      setDetailsToggle(false)
      setAddaFishToggle(true)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(false)
    } else if (editBoxToggle === "deleteaFish") {
      setDetailsToggle(false)
      setAddaFishToggle(false)
      setDeleteaFishToggle(true)
      setAddaFoodToggle(false)
    } else if (editBoxToggle === "addafood") {
      setDetailsToggle(false)
      setAddaFishToggle(false)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(true)
    } else {
      setDetailsToggle(false)
      setAddaFishToggle(false)
      setDeleteaFishToggle(false)
      setAddaFoodToggle(false)
    }
  },[editBoxToggle])

  return (
    <div className="App">
      <div className="app-container">
        <Header 
          setSelectedEnvironment = {setSelectedEnvironment}
          selectedEnvironment = {selectedEnvironment}
        />
        <FishTank 
          baseURL = {baseURL}
          reload={reload}
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
          <AddaFish
            baseURL={baseURL}
            selectedEnvironment={selectedEnvironment}
            setEditBoxToggle={setEditBoxToggle}
            addaFishToggle={addaFishToggle}
            setReload={setReload}
            reload={reload}
            selectedCritters={selectedCritters}
          />
          <DeleteaFish
            baseURL = {baseURL}
            setEditBoxToggle={setEditBoxToggle}
            deleteaFishToggle={deleteaFishToggle}
            selectedEnvironment={selectedEnvironment}
            setReload={setReload}
            reload={reload}
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
