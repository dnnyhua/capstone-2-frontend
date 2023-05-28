import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './nav/NavBar';
import Home from "./home/Home"
import Login from "./login/Login"

import GlobalContext from './helper/GlobalContext';






function App() {
  // this is what will be stored if there is a token in localStorage -> {"token":"token_code"}
  let initalTokenState = JSON.parse(localStorage.getItem("token")) || null
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(initalTokenState);
  // const [appliedJobsIds, setAppliedJobsIds] = useState([])

  async function updateLocalStorage() {
    localStorage.setItem("token", JSON.stringify(token))
  }


  return (
    <div>
      <BrowserRouter>
        <GlobalContext.Provider value={{ currUser }}>
          <NavBar />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" />
              <Route exact path="/profile" />
              <Route exact path="/jobs/new" />
              <Route exact path="/jobs" />
            </Routes>
          </main>




        </GlobalContext.Provider>
      </BrowserRouter>





    </div>
  );
}

export default App;
