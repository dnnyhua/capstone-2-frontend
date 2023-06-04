import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import "./PetProfile.css"


const PetProfile = () => {
    const { id } = useParams();
    const [pet, setPet] = useState([])
    const [jobs, setJobs] = useState([])

    async function getPetProfile() {
        const res = await Api.getPetProfile(id)
        setPet(res.pet[0])
    }

    useEffect(() => {
        getPetProfile()
    }, [])

    return (
        <div className="PetProfile">
            <div className="PetProfileBody">
                <section className="petProfileHead">
                    <img src={pet.img} className="petPfp" alt="pet profile picture" />
                    <h2>{pet.name}</h2>
                </section>

                <section className="petInfo">
                    <h5>Breed: {pet.breed}</h5>
                    <h5>Gender: {pet.gender}</h5>
                    <h5>Age: {pet.age}</h5>
                    <h5>Weight (lbs): {pet.weight}</h5>
                    <h5>Friendly with children: {pet.friendly_w_children === 'true' ? "Yes" : "No"}</h5>
                    <h5>Friendly with other dogs: {pet.friendly_w_other_dogs === 'true' ? "Yes" : "No"}</h5>
                </section>

                <section className="walkSchedule">
                    <h2>Upcoming Walks</h2>
                </section>
            </div>
        </div>
    )
}

export default PetProfile;

// additional_details
// : 
// "likes to eat rocks. keep an eye on him."
// age
// : 
// 4
// breed
// : 
// "golden retriever"
// created_at
// : 
// "2023-06-03T22:38:24.312Z"
// friendly_w_children
// : 
// true
// friendly_w_other_dogs
// : 
// true
// gender
// : 
// "male"
// id
// : 
// 3
// img
// : 
// "https://i0.wp.com/regencyranchgoldens.com/wp-content/uploads/2022/04/golden-head1.png?resize=256%2C256&ssl=1"
// name
// : 
// "Buddy"
// owner_id
// : 
// 2
// size
// : 
// "large"
// weight
// : 
// 60