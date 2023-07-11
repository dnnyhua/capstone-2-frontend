import React from "react"
import SignUpForm from "../forms/SignUpForm"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../helper/GlobalContext"
import './SignUp.css'

const SignUp = ({ registerNewUser }) => {
    const { currUser } = GlobalContext
    console.log(currUser)
    const navigate = useNavigate();

    if (currUser && currUser.username) {
        navigate("/")
    }

    return (
        <div className="SignUp">
            <h1>Join our dog-loving community!</h1>
            <SignUpForm registerNewUser={registerNewUser} />
        </div>

    )
}

export default SignUp