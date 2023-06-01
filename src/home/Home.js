import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import PetsList from "../pet/PetsList";
import PetThumbnail from "../pet/PetThumbnail";
import GlobalContext from "../helper/GlobalContext";


const Home = () => {
    const { currUser, pets, jobs } = useContext(GlobalContext)
    console.log(jobs)
    console.log(pets)



    if (currUser) {
        return (
            <div className="Home">

                <h1 className="title">Walkies</h1>

                <div className="body-info">
                    <section className="petsContainer">
                        <h2>Your Pets</h2>
                        <PetsList pets={pets} />
                    </section>




                    ADD SCHEDULE COMPONENTS








                    <section className="scheduleContainer">
                        <h2 className="mb-2">Walk Schedule</h2>
                        <h5>schedule 1....................</h5>
                        <h5>schedule 2....................</h5>
                        <h5>schedule 3....................</h5>
                        <h5>schedule 4....................</h5>
                    </section>
                </div>

            </div>
        )
    }

    return (
        <div className="Home d-flex justify-content-center">
            <div>
                <h1>Walkies</h1>
                <Link to={'/login'}>
                    <button className="btn btn-primary">Login</button>
                </Link>
                <Link>
                    <button className="btn btn-secondary">Sign Up</button>
                </Link>
            </div>
        </div>
    )




}


export default Home 