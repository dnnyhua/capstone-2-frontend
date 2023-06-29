import React, { useContext } from "react";
import ProfileForm from "../forms/ProfileForm";
import GlobalContext from "../helper/GlobalContext";


const Profile = () => {
    const { currUser } = useContext(GlobalContext)

    return (
        <div className="Login ">
            <h1>{currUser.username}'s Profile</h1>
            <ProfileForm />
        </div>
    )
}

export default Profile;