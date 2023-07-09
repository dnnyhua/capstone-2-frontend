import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../helper/GlobalContext";
import { useNavigate, Link } from "react-router-dom";
import './ProfileForm.css'

const ProfileForm = () => {
    const { currUser, profileUpdate } = useContext(GlobalContext)
    const navigate = useNavigate()

    const initialState = {
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        address: currUser.address,
        profileImage: currUser.profileImage,
        email: currUser.email,
        city: currUser.city,
        state: currUser.state,
        zipcode: currUser.zipcode,
        bio: currUser.bio || null,
        rate: currUser.rate || null
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        profileUpdate(currUser.username, formData)
        navigate('/')
    }


    return (
        <div className="ProfileForm">
            <form onSubmit={handleSubmit} className="form-control">

                {currUser.role === "dog walker" ? (
                    <>
                        <div className="col-md-12 mb-3 inputGrp">
                            <label htmlFor="bio"><b>Bio</b></label>
                            <input
                                type="text"
                                id="bio"
                                name="bio"
                                placeholder="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-12 mb-3 inputGrp">
                            <label htmlFor="bio"><b>Rate ($/30 min)</b></label>
                            <input
                                type="number"
                                id="rate"
                                name="rate"
                                placeholder="Rate Per 30 Min"
                                value={formData.rate}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </>
                ) : null}


                <div className="col-md-12 mb-3 inputGrp">
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

                <div className="col-md-12 mb-3 inputGrp">
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

                <div className="col-md-12 mb-3 inputGrp">
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

                <div className="col-md-12 mb-3 inputGrp">
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

                <div className="col-md-12 mb-3 inputGrp">
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

                <div className="col-md-12 mb-3 inputGrp">
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

                <div className="col-md-12 mb-3 inputGrp">
                    <label htmlFor="state"><b></b>State</label>
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
                <div className="col-md-12 mb-3 inputGrp">
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


                <div className="ProfileForm-btnGrp">
                    <button type="submit" className="btn btn-primary ProfileForm-btn">Update</button>
                    <Link to={"/"}>
                        <button className="btn btn-danger ProfileForm-btn">Back</button>
                    </Link>
                </div>


            </form >
        </div >
    )
}

export default ProfileForm;
