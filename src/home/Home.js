import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import GlobalContext from "../helper/GlobalContext";


const Home = () => {
    let { currUser } = useContext(GlobalContext)

    if (!currUser) {
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

    return (
        <h1>
            Pretend this is the profile page after logging in
        </h1>
    )

}

export default Home 