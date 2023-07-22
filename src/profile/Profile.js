import React, { useContext } from "react";
import ProfileForm from "../forms/ProfileForm";
import GlobalContext from "../helper/GlobalContext";
import './Profile.css'


const Profile = () => {
    const { currUser } = useContext(GlobalContext)

    if (!currUser) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="Profile">
            <h1>{currUser.username}'s Profile</h1>
            <ProfileForm />
        </div>
    )
}

export default Profile;