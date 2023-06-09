import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Api from "../api";
import GlobalContext from "../helper/GlobalContext";

const Applications = () => {
    const { id } = useParams();
    const { currUser } = useContext(GlobalContext)

    const [applications, setApplications] = useState(null);

    async function getApplications() {
        const appRes = await Api.getApplications(id, currUser.username)
        console.log(appRes)
        setApplications(appRes.applications)
    }

    useEffect(() => {
        getApplications();
    }, [])


    if (!applications) {
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    console.log(applications)


    return (
        <div>
            <h1>Those who applied will be listed below</h1>
        </div>
    )
}

export default Applications;