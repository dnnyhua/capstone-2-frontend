import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import PetProfileForm from "../forms/PetProfileForm";
import GlobalContext from "../helper/GlobalContext";
import './PetProfileEdit.css'

const PetProfileEdit = () => {
    const { currUser } = useContext(GlobalContext)
    const { petId } = useParams();
    const [pet, setPet] = useState([]);

    async function getPetInfo() {
        const res = await Api.getPetProfile(petId)
        setPet(res.pet[0])
    }

    useEffect(() => {
        getPetInfo();
    }, []
    )

    console.log(pet)

    return (
        <div className="PetProfileEdit">
            <h1>Edit {pet.name}'s Profile</h1>
            <PetProfileForm pet={pet} currUser={currUser} getPetInfo={getPetInfo} />
        </div>
    )
}

export default PetProfileEdit;

