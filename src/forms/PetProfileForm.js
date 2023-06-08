import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Api from "../api";
import GlobalContext from "../helper/GlobalContext";


const PetProfileForm = ({ pet, currUser }) => {
    const { getCurrUserData } = useContext(GlobalContext)
    const navigate = useNavigate()
    const goBack = () => {
        navigate(1);
    }
    const initialFormData = {
        name: "",
        gender: "",
        breed: "",
        age: "",
        weight: "",
        friendlyWithChildren: false,
        friendlyWithOtherDogs: false,
        img: "",
        additionalDetails: ""
    };

    console.log(pet)


    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        if (pet) {
            setFormData({
                name: pet.name,
                gender: pet.gender,
                breed: pet.breed,
                age: pet.age,
                weight: pet.weight,
                friendlyWithChildren: pet.friendlyWithChildren,
                friendlyWithOtherDogs: pet.friendlyWithOtherDogs,
                img: pet.img,
                additionalDetails: pet.additionalDetails
            });
        }
    }, [pet])

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }


    async function updatePetProfile(petId, username, formData) {
        const res = await Api.updatePetProfile(petId, username, formData)
    }



    const handleSubmit = (evt) => {
        evt.preventDefault();
        updatePetProfile(pet.id, currUser.username, formData)

        // NEED TO CREATE ANOTHER async fucntion, API
        // profileUpdate(currUser.username, formData)
        getCurrUserData();

        navigate(-1)
    }

    async function deletePetProfile(petId, petName, username) {
        await Api.delete(petId, petName, username);
        getCurrUserData();
        navigate('/');


    }

    const handleDelete = (evt) => {
        evt.preventDefault();
        deletePetProfile(pet.id, pet.name, currUser.username)

    }


    return (
        <div className="ProfileForm ">
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>

            <form onSubmit={handleSubmit} className="form-control">

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="breed">Breed:</label>
                    <input
                        type="text"
                        id="breed"
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="mb-3"
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age (yrs):</label>
                    <input
                        type="number"
                        min={1}
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="weight">Weight (lbs):</label>
                    <input
                        type="number"
                        min={1}
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="friendlyWithOtherDogs">Friendly with other dogs?</label>
                    <input
                        type="checkbox"
                        id="friendlyWithOtherDogs"
                        checked={formData.friendlyWithOtherDogs}
                        name='friendlyWithOtherDogs'
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                friendlyWithOtherDogs: e.target.checked,
                            }))
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="friendlyWithChildren">Friendly with children?</label>
                    <input
                        type="checkbox"
                        id="friendlyWithChildren"
                        checked={formData.friendlyWithChildren}
                        name='friendlyWithChildren'
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                friendlyWithChildren: e.target.checked,
                            }))
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="img">Image:</label>
                    <input
                        type="url"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="additionalDetails">Additional Details:</label>
                    <textarea
                        name="additionalDetails"
                        id="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        cols="30"
                        rows="3">
                    </textarea>
                </div>
                <div >
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button className="btn btn-danger" onClick={goBack}>Back</button>

                    </div>
                </div>

            </form>
        </div>
    )
}

export default PetProfileForm;
