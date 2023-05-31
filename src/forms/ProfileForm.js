import React, { useState, useContext } from "react";
import GlobalContext from "../helper/GlobalContext";


const ProfileForm = () => {
    const { currUser, profileUpdate } = useContext(GlobalContext)

    const initialState = {
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        address: currUser.address,
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
                        type="integer"
                        id="zipcode"
                        name="zipcode"
                        placeholder="city"
                        value={formData.zipcode}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div >
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ProfileForm;


// "username": "admin",
// 			"firstName": "admin_firstName",
// 			"lastName": "admin_lastName",
// 			"email": "admin@gmail.com",
// 			"role": "dog owner",
// 			"isAdmin": true,
// 			"address": "123 puppy dr",
// 			"city": "san jose",
// 			"state": "california",
// 			"zipcode": 95123