import React, { useState, useContext } from 'react';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import GlobalContext from '../helper/GlobalContext';
import "./AddJobFormModal.css"


const AddJobFormModal = () => {
    // Other variables
    const { currUser, createJob } = useContext(GlobalContext)
    const animatedComponents = makeAnimated();
    const initialState = {
        ownerId: currUser.ownerId,
        date: '',
        time: '',
        duration: '',
        petIds: '',
        address: currUser.address,
        city: currUser.city,
        state: currUser.state,
        zipcode: currUser.zipcode

    }

    const [formData, setFormData] = useState(initialState);
    const [showModal, setShowModal] = useState(false);
    const [pets, setPets] = useState(currUser.pets);


    const options = pets ? pets.map(pet => (
        { value: pet.id, label: pet.name }))
        : [];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const petIdsOnChange = (selectedOptions) => {
        const petIds = selectedOptions.map(option => option.value);
        setFormData({
            ...formData,
            petIds: petIds
        });
    };

    const durationOnChange = (selectedOption) => {
        const duration = selectedOption.value;
        setFormData({
            ...formData,
            duration: duration
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Reset form data
        setFormData(initialState);

        // Add new job to the database
        createJob(currUser.username, formData)

        // Close the modal
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <button className="btn addJobBtn" onClick={handleModalOpen}>+</button>

            <div className={`modal ${showModal ? 'show' : ''}`}>
                <div className="modal-dialog">
                    <div className={`modal-content ${showModal ? 'show' : ''}`}>
                        <div className="modal-header">
                            <h5 className="modal-title">Add Job</h5>
                            <button type="button" className="close" onClick={handleModalClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="date">Date:</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="time">Time:</label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    {/* <label htmlFor="duration">Duration (mins):</label>
                                    <select
                                        id="duration"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                        className="mb-3"
                                    >
                                        <option value="">Select</option>
                                        <option value="30">30</option>
                                        <option value="45">45</option>
                                        <option value="60">60</option>
                                        <option value="90">90</option>
                                        <option value="120">120</option>

                                    </select> */}
                                    <label htmlFor="duration">Duration (mins):</label>
                                    <Select
                                        options={[
                                            { value: 30, label: "30" },
                                            { value: 45, label: "45" },
                                            { value: 60, label: "60" },
                                            { value: 90, label: "90" },
                                            { value: 120, label: "120" }
                                        ]}
                                        onChange={durationOnChange}
                                        className="duration"
                                        classNamePrefix="duration"
                                        name="duration"
                                    />
                                </div>

                                <div className="form-group">
                                    {/* <label htmlFor="petIds">Pets:</label>
                                    <input
                                        type="text"
                                        id="petIds"
                                        name="petIds"
                                        value={formData.petIds}
                                        onChange={handleInputChange}
                                    /> */}
                                    <label htmlFor="petIds">Pets:</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        options={options}
                                        onChange={petIdsOnChange}
                                        isMulti
                                        components={animatedComponents}
                                        className="pet-ids"
                                        classNamePrefix="pet-ids"
                                        name="petIds"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="state">State:</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="zipcode">Zipcode:</label>
                                    <input
                                        type="text"
                                        id="zipcode"
                                        name="zipcode"
                                        value={formData.zipcode}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <button type="submit">Post Job</button>
                            </form>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                                Close
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddJobFormModal;
