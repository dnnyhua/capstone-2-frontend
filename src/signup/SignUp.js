import React from "react"
import SignUpForm from "../forms/SignUpForm"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../helper/GlobalContext"

const SignUp = ({ registerNewUser }) => {
    const { currUser } = GlobalContext
    console.log(currUser)
    const navigate = useNavigate();

    // if (currUser.username) {
    //     navigate("/")
    // }

    return (
        <div>
            <h1>This is the sign up page</h1>
            <SignUpForm registerNewUser={registerNewUser} />
        </div>

    )
}

export default SignUp