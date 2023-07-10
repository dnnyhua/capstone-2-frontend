import React from "react";
import ApplicationCard from "./ApplicationCard";
import './ApplicationsList.css'


const ApplicationsList = ({ applications, getApplications }) => {

    if (!applications) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    console.log(applications)

    return (
        <div className="ApplicationsList">
            <h1>Applications</h1>
            {applications.map(application =>
                <ApplicationCard
                    key={`${application.jobId}${application.walkerId}`}
                    jobId={application.jobId}
                    walkerId={application.walkerId}
                    status={application.status}
                    firstName={application.firstName}
                    lastName={application.lastName}
                    rate={application.rate}
                    bio={application.bio}
                    profileImage={application.profileImage}
                    getApplications={getApplications}

                />
            )}

        </div>
    )
}

export default ApplicationsList

