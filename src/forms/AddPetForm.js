import React, { useState } from 'react';

import "./AddPetForm.css"


const AddPetFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data
    setFormData({
      name: '',
      breed: '',
      age: ''
    });
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
      <button className="addPet" onClick={handleModalOpen}>+</button>


      <div className={`modal ${showModal ? 'show' : ''}`}>
        <div className="modal-dialog">
          <div className={`modal-content ${showModal ? 'show' : ''}`}>
            <div className="modal-header">
              <h5 className="modal-title">Form Modal</h5>
              <button type="button" className="close" onClick={handleModalClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="breed">Breed:</label>
                  <input
                    type="breed"
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <textarea
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AddPetFormModal;
