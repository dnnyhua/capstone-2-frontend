import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './nav/NavBar';
import Home from "./home/Home"
import Login from "./login/Login"
import Profile from './profile/Profile';
import SignUp from './signup/SignUp';

import GlobalContext from './helper/GlobalContext';
import Api from './api';

import jwt from 'jsonwebtoken';







function App() {
  // this is what will be stored if there is a token in localStorage -> {"token":"token_code"}
  let initalTokenState = JSON.parse(localStorage.getItem("token")) || null

  const [Loading, setLoading] = useState(false);

  const [currUser, setCurrUser] = useState(null);

  const [token, setToken] = useState(initalTokenState);
  // const [appliedJobsIds, setAppliedJobsIds] = useState([])

  async function updateLocalStorage() {
    localStorage.setItem("token", JSON.stringify(token))
  }

  async function getCurrUserData() {
    if (token) {
      Api.token = token;
      let { username } = jwt.decode(token)
      let res = await Api.getUserData(username)
      const user = res.user
      setCurrUser(user)
      console.log(user)

      if (user.role === "dog owner") {
        {

        }
      }
      // setAppliedJobsIds(user.appliedJobs)
    }
    setLoading(true)
  }


  async function userLogin(formData) {
    let res = await Api.userLogin(formData)
    setToken(res.token)
    return res;
  }

  async function userLogout() {
    setCurrUser(null)
    localStorage.removeItem("token")
  }

  async function profileUpdate(username, formData) {
    let res = await Api.profileUpdate(username, formData)
    console.log(res)
    getCurrUserData()
  }



  useEffect(() => {
    setLoading(false);
    updateLocalStorage();
    getCurrUserData();
  }, [token]
  )

  if (!Loading) return <h1>Loading...</h1>

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ currUser, userLogin, userLogout, profileUpdate }}>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/jobs/new" />
            <Route exact path="/jobs" />
          </Routes>
        </main>




      </GlobalContext.Provider>
    </BrowserRouter>

  );
}

export default App;
