import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import "./Login.css"



const Login = () => {
    return (
        <div className="Login ">
            <h1>Login Page</h1>
            <LoginForm />
        </div>
    )

}

export default Login