import React from 'react';

import './App.css';
import MainPage from "./pages/MainPage";
import PersonPage from "./pages/PersonPage";
import { Routes, Route} from "react-router-dom";
import {StarWarsState} from "./context/starwars/StarWarsState";

function App() {
  return (
     <StarWarsState>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/about/:id" element={<PersonPage/>} />
            </Routes>
     </StarWarsState>
  );
}

export default App;
