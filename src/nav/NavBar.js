import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import GlobalContext from '../helper/GlobalContext';


const NavBar = () => {
    let { currUser, userLogout } = useContext(GlobalContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">W</Link>
                <button className="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>

                {currUser ?
                    /* Show if logged in */
                    <div>
                        <ul className='navbar-nav ms-auto collapse navbar-collapse'>
                            <li className="nav-item">
                                <Link to={"/"}>
                                    <button className="nav-link btn btn-link" onClick={userLogout}>Logout</button>
                                </Link>

                            </li>
                            <li className="nav-item navPfp">
                                <Link to="/profile" >
                                    <img className="nav-link navPfp" src="https://theanimalleague.org/wp-content/uploads/2022/03/The-Animal-League-Pet-Prom-King-and-Queen-Photo-Contest-1024x576.png" alt="" />
                                </Link>

                            </li>
                        </ul>
                    </div>
                    :

                    <div>
                        <ul className='navbar-nav ms-auto collapse navbar-collapse'>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" >Sign Up</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" >Login</button>
                            </li>
                        </ul>
                    </div>





                }

            </div>
        </nav>
    );
};



export default NavBar;