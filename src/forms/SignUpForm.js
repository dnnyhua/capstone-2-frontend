import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



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
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="mb-3"
                    >
                        <option value="">Select</option>
                        <option value="dog owner">Dog Owner</option>
                        <option value="dog walker">Dog Walker</option>
                    </select>
                </div>

                {formData.role === "dog walker" ? (
                    <div className="col-md-12 mb-3">
                        <label htmlFor="rate">What is your rate per 30 min walk?</label>
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


                <div className="col-md-12 mb-3">
                    <label htmlFor="username">Username</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="password">Password</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="firstName">First Name</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="lastName">Last Name</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="email">Email</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="profileImage">Profile Image (URL)</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="address">Address</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="city">City</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="state">State</label>
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

                <div className="col-md-12 mb-3">
                    <label htmlFor="zipcode">Zipcode</label>
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
                    <div className="col-md-12 mb-3">
                        <label htmlFor="bio">Short Bio to let the fur parents know about you!</label>
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
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SignUpForm;