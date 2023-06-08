import React from "react";
import { Link } from "react-router-dom";

import "./PetThumbnail.css"

const PetThumbnail = ({ img, name, id }) => {

    return (
        <div key={id}>
            <Link to={`/pets/profile/${id}`}>
                <img className="PetThumbnail" id={id} src={img} />
            </Link>
            <div>
                <h5>{name}</h5>
            </div>

        </div>

    )
}

export default PetThumbnail;