import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import PetsList from "../pet/PetsList";
import PetThumbnail from "../pet/PetThumbnail";
import GlobalContext from "../helper/GlobalContext";


const Home = () => {
    const { currUser, pets } = useContext(GlobalContext)


    if (currUser) {
        return (
            <div className="Home">

                <h1 className="title">Walkies</h1>

                <div className="body-info">
                    <section className="container">
                        <h2>Your Pets</h2>
                        <div className="PetsList">
                            <PetsList pets={pets} />
                        </div>
                    </section>

                    <section className="container">
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