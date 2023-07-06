import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './nav/NavBar';
import Home from "./home/Home"
import Login from "./login/Login"
import Profile from './profile/Profile';
import SignUp from './signup/SignUp';
import PetProfile from './pet/PetProfile';
import SchedulePage from './schedule/SchedulePage';
import WalkerSchedulePage from './walkerSchedule/WalkerSchedulePage';
import PetProfileEdit from './pet/PetProfileEdit';
import Applications from './applications/Applications';
import About from './about/About';


import GlobalContext from './helper/GlobalContext';
import Api from './api';

import jwt from 'jsonwebtoken';


function App() {
  // this is what will be stored if there is a token in localStorage -> {"token":"token_code"}
  let initalTokenState = JSON.parse(localStorage.getItem("token")) || null

  const [isLoading, setIsLoading] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [pets, setPets] = useState(null)

  // Depending if logged in as a owner or walker: Jobs posted by the dog owner OR Jobs that walker applied to
  const [jobs, setJobs] = useState()

  // Jobs post by ALL dog owners. This will be used for walkers to search and apply to jobs
  const [allJobs, setAllJobs] = useState()

  const [token, setToken] = useState(initalTokenState);

  async function updateLocalStorage() {
    localStorage.setItem("token", JSON.stringify(token))
  }

  async function getCurrUserData() {
    setIsLoading(true)

    if (token) {
      Api.token = token;
      let { username } = jwt.decode(token)
      let res = await Api.getUserData(username)
      const user = res.user
      setCurrUser(user)
      console.log(user)

      if (user.role === "dog owner") {
        setPets(user.pets)
        getJobs(user.ownerId)
      }

      if (user.role === "dog walker") {
        // await getAllJobs()
        await getAppliedJobs(user.walkerId, 'scheduled', user.appliedJobsIds)
      }

    }

  }

  async function registerNewUser(formData) {
    const res = await Api.registerNewUser(formData)
    setToken(res.token)
  }

  async function userLogin(formData) {
    const res = await Api.userLogin(formData)
    setToken(res.token)
  }

  async function userLogout() {
    setCurrUser(null)
    setPets(null)
    setJobs(null)
    localStorage.removeItem("token")
  }

  async function profileUpdate(username, formData) {
    const res = await Api.profileUpdate(username, formData)
    console.log(res)
    getCurrUserData()
  }

  async function getJobs(ownerId, status = "scheduled") {
    const res = await Api.getJobs2(ownerId, status)
    setJobs(res.jobs)
  }

  // async function getJobs2(ownerId, status = "scheduled") {
  //   const res = await Api.getJobs2(ownerId, status)
  //   setJobs(res.jobs)
  // }

  async function getAllJobs() {
    const res = await Api.getAllJobs()
    setAllJobs(res);
  }

  async function searchJob(query, page) {
    const res = await Api.searchJob(query, page)
    setAllJobs(res);
  }

  async function createJob(username, formData) {
    const res = await Api.createJob(username, formData)
    getCurrUserData()
    // console.log(res)

  }

  async function addPet(formData) {
    const res = await Api.addPet(formData)
    getCurrUserData()
    // console.log(res)
  }

  async function getAppliedJobs(walkerId, status, jobIds) {
    const res = await Api.getAppliedJobs2(walkerId, status, jobIds)
    setJobs(res.jobs)
  }

  async function applyToJob(username, jobId) {
    await Api.applyToJob(username, jobId)

    // Flow seems better if page does not
    // getCurrUserData();
  }

  useEffect(() => {
    updateLocalStorage();
    getCurrUserData();

  }, [token]
  )

  if (!isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }




  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ currUser, pets, jobs, allJobs, getJobs, getAppliedJobs, searchJob, applyToJob, getCurrUserData, userLogin, userLogout, profileUpdate, addPet, createJob, getCurrUserData }}>
        <header className="navBar" >
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp registerNewUser={registerNewUser} />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/pets/profile/:petId/edit" element={<PetProfileEdit />}> </Route>
            <Route exact path="/pets/profile/:petId" element={<PetProfile />}></Route>
            <Route exact path="/schedule/:id/applications" element={<Applications />}></Route>

            <Route exact path="/schedule/:id"
              element={currUser && currUser.role === "dog owner" ? (
                <SchedulePage />
              ) : (
                <WalkerSchedulePage />
              )
              }></Route>

          </Routes>
        </main>
      </GlobalContext.Provider>
    </BrowserRouter>

  );
}

export default App;
