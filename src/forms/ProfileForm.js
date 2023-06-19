import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../helper/GlobalContext";
import { useNavigate, Link } from "react-router-dom";


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
        zipcode: currUser.zipcode
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
        <div className="ProfileForm ">
            <form onSubmit={handleSubmit} className="form-control">
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

                <div >
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <Link to={"/"}>
                            <button className="btn btn-danger">Back</button>
                        </Link>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ProfileForm;
