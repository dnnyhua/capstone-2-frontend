import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../helper/GlobalContext";
import './LoginForm.css'


const LoginForm = () => {
    const { userLogin } = useContext(GlobalContext)

    const navigate = useNavigate();
    const initialState = {
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialState)
    // console.log(formData)

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))

    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        userLogin(formData)
        navigate("/")
    }

    return (
        <div className="LoginForm" >
            <form onSubmit={handleSubmit} className="form-control p-3 ">
                <div className="col-md-12 mb-3 inputGrp">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        palceholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control"

                    />
                </div>
                <div className="col-md-12 mb-3 inputGrp">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        palceholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"

                    />
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm