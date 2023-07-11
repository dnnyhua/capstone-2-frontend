import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Api from "../api";
import GlobalContext from "../helper/GlobalContext";
import './PetProfileForm.css'


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
        getCurrUserData();
        navigate(-1)
    }

    async function deletePetProfile(petId, petName, username) {
        await Api.deletePet(petId, petName, username);
        getCurrUserData();
        navigate('/');
    }

    const handleDelete = (evt) => {
        evt.preventDefault();
        deletePetProfile(pet.id, pet.name, currUser.username)
    }

    return (
        <div className="PetProfileForm">
            <form onSubmit={handleSubmit} className="form-control">

                <div className="form-group inputGrp">
                    <label htmlFor="name"><b>Name:</b></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="breed"><b>Breed:</b></label>
                    <input
                        type="text"
                        id="breed"
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="gender"><b>Gender:</b></label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="age"><b>Age (yrs):</b></label>
                    <input
                        type="number"
                        min={1}
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="weight"><b>Weight (lbs):</b></label>
                    <input
                        type="number"
                        min={1}
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="friendlyWithOtherDogs"><b>Friendly with other dogs?</b></label>
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

                <div className="form-group inputGrp">
                    <label htmlFor="friendlyWithChildren"><b>Friendly with children?</b></label>
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

                <div className="form-group inputGrp">
                    <label htmlFor="img"><b>Image:</b></label>
                    <input
                        type="url"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group inputGrp">
                    <label htmlFor="additionalDetails"><b>Additional Details:</b></label>
                    <textarea
                        name="additionalDetails"
                        id="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        cols="30"
                        rows="3">
                    </textarea>
                </div>

                <div className="PetProfileForm-btnGrp">
                    <button type="submit" className="btn btn-primary PetProfileForm-updateBtn">Update</button>
                    <button className="btn btn-danger PetProfileForm-backBtn" onClick={goBack}>Back</button>
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-danger PetProfileForm-deleteBtn " onClick={handleDelete}>Delete Pet Profile</button>
                </div>



            </form>
        </div>
    )
}

export default PetProfileForm;
