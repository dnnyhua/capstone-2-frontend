import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import GlobalContext from "../helper/GlobalContext";


const Home = () => {
    let { currUser } = useContext(GlobalContext)

    if (currUser) {
        return (
            <div className="Home">
                <div>
                    <h2>Welcome {currUser.username}</h2>
                </div>

                <div>
                    <h3>Your Pets</h3>
                    <div className="yourPets">
                        <p>If there is a pet add pet, if not put +</p>
                    </div>
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