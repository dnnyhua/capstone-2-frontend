import React from "react";
import PetThumbnail from "./PetThumbnail";
import AddPetFormModal from "../forms/AddPetFormModal";

import "./PetsList.css"


const PetsList = ({ pets }) => {
    return (
        <div className="PetsList">
            <AddPetFormModal />
            {pets.map(pet => (
                <PetThumbnail
                    key={pet.id}
                    id={pet.id}
                    name={pet.name}
                    img={pet.img}
                />
            ))}
        </div>
    )
}

export default PetsList;