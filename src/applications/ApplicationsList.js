import React from "react";
import ApplicationCard from "./ApplicationCard";
import './ApplicationsList.css'


const ApplicationsList = ({ applications }) => {
    return (
        <div className="ApplicationsList">
            <h1>Applications</h1>
            {applications.map(application =>
                <ApplicationCard
                    jobId={application.jobId}
                    walkerId={application.walkerId}
                    status={application.walkerId}
                />
            )}

        </div>
    )
}

export default ApplicationsList

