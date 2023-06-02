import React from "react";
import PetThumbnail from "./PetThumbnail";
import AddPetFormModal from "../forms/AddPetForm";

import "./PetsList.css"


const PetsList = ({ pets }) => {
    return (
        <div className="PetsList">
            {pets.map(pet => (
                <PetThumbnail
                    id={pet.id}
                    name={pet.name}
                    img={pet.img}
                />
            ))}
            <AddPetFormModal />
        </div>
    )
}

export default PetsList;