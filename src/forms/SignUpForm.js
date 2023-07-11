import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUpForm.css'



const SignUpForm = ({ registerNewUser }) => {

    const [formData, setFormData] = useState("")
    const navigate = useNavigate();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    // get token and store in localStorage
    const handleSubmit = (evt) => {
        evt.preventDefault();
        registerNewUser(formData)
        navigate("/")
    }
    console.log(formData)



    return (
        <div className="SignUpForm">
            <form onSubmit={handleSubmit} className="form-control">
                <div className="form-group inputGrp">
                    <label className="me-2" htmlFor="role"><b>Role</b></label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="dog owner">Dog Owner</option>
                        <option value="dog walker">Dog Walker</option>
                    </select>
                </div>

                {formData.role === "dog walker" ? (
                    <div className="form-group inputGrp">
                        <label htmlFor="rate"><b>What is your rate per 30 min walk?</b></label>
                        <input
                            type="number"
                            id="rate"
                            min={15}
                            name="rate"
                            placeholder="20"
                            value={formData.rate}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                ) : ("")}


                <div className="form-group inputGrp">
                    <label htmlFor="username"><b>Username</b></label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="profileImage"><b>Profile Image (URL)</b></label>
                    <input
                        type="text"
                        id="profileImage"
                        name="profileImage"
                        placeholder="profile image"
                        value={formData.profileImage}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="address"><b>Address</b></label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="city"><b>City</b></label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="state"><b>State</b></label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="zipcode"><b>Zipcode</b></label>
                    <input
                        type="number"
                        id="zipcode"
                        name="zipcode"
                        placeholder="zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                {formData.role === "dog walker" ? (
                    <div className="form-group inputGrp">
                        <label htmlFor="bio"><b>Short Bio to let the fur parents know about you!</b></label>
                        <input
                            type="bio"
                            id="bio"
                            name="bio"
                            placeholder="I am a huge dog lover. Grew up with dogs since I was 5 years old."
                            value={formData.bio}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                ) : ("")}

                <div >
                    <div className="col text-center mt-3 mb-2">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SignUpForm;