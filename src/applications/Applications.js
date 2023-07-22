import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import ApplicationsList from "./ApplicationsList";

const Applications = () => {
    const { id } = useParams();
    const [applications, setApplications] = useState([]);

    async function getApplications() {
        const appRes = await Api.getApplications(id)
        console.log(appRes.applications)
        setApplications(appRes.applications)
    }

    useEffect(() => {
        getApplications();
    }, [])

    useEffect(() => {
    }, [applications]);

    console.log(applications)
    return (
        <>
            <ApplicationsList applications={applications} getApplications={getApplications} />
        </>
    )
}

export default Applications;