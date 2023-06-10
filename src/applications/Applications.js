import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../api";
import ApplicationsList from "./ApplicationsList";
import GlobalContext from "../helper/GlobalContext";

const Applications = () => {
    const { id } = useParams();
    const { currUser } = useContext(GlobalContext)
    const [applications, setApplications] = useState([]);

    async function getApplications() {
        const appRes = await Api.getApplications(id, currUser.username)
        setApplications(appRes.applications)
    }

    useEffect(() => {
        getApplications();
    }, [])

    console.log(applications)


    return (
        <>
            <ApplicationsList applications={applications} />
        </>
    )
}

export default Applications;