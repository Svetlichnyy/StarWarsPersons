import React, {useEffect, useState} from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import personContext from "./context/personContext";
import getPersons from "./axios";
import PersonPage from "./pages/PersonPage";
import { Routes, Route} from "react-router-dom";

function App() {
    const [persons,setPersons] = useState([])

    useEffect(() =>{
        let isRequestPerformed = false
        const fetchPersons =  async () => {
            const curPersons = await getPersons()
            if (!isRequestPerformed) {
                setPersons(curPersons.data.results)
            }
        }
        fetchPersons();
        return () => {
            isRequestPerformed = true;
        }
    },[])
  return (
    <personContext.Provider value={persons}>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about:id" element={<PersonPage/>} />
        </Routes>
    </personContext.Provider>
  );
}

export default App;
