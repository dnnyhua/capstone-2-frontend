import React, { useState, useContext } from 'react';
import GlobalContext from '../helper/GlobalContext';
import "./AddPetForm.css"


const AddPetFormModal = () => {
  const { currUser } = useContext(GlobalContext)

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    ownerId: currUser.ownerId,
    name: '',
    breed: '',
    age: '',
    gender: '',
    weight: '',
    friendlyWithDogs: false,
    friendlyWithChildren: false,
    img: '',
    additionalDetails: ''
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
      ownerId: currUser.ownerId,
      name: '',
      breed: '',
      age: '',
      gender: '',
      weight: '',
      friendlyWithDogs: false,
      friendlyWithChildren: false,
      img: '',
      additionalDetails: ''
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
                    type="text"
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="friendlyWithDogs">Friendly with other dogs?</label>
                  <input
                    type="checkbox"
                    id="friendlyWithDogs"
                    checked={formData.friendlyWithDogs}
                    name='friendlyWithDogs'
                    onChange={(e) =>
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        friendlyWithDogs: e.target.checked,
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
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="additionalDetails">Additional Details:</label>
                  <textarea
                    name="additionalDetails"
                    id="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    cols="30"
                    rows="3">
                  </textarea>
                </div>

                <button type="submit">Add</button>
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
