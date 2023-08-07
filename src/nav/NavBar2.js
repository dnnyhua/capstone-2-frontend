import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import GlobalContext from '../helper/GlobalContext';
import "./NavBar.css"

const Navbar2 = () => {
    const { currUser, userLogout } = useContext(GlobalContext)

    return (
        <Navbar bg="light" expand="lg" style={{ zIndex: 100 }}>
            <Navbar.Brand href="#" className='navLogo'>W</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav" className="mr-auto">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="#" >Contact</Nav.Link>
                </Nav>
                {currUser ? (
                    /* Show if logged in */
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" onClick={userLogout}>Logout</Nav.Link>
                        <Nav.Link as={Link} to="/profile"  >{currUser.username}</Nav.Link>
                        <img className="navPfp" src={currUser.profileImage} alt="" />
                    </Nav>
                ) : (
                    /* Show if logged out */
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to={"/signup"}>Sign Up</Nav.Link>
                        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar2;
