import React from "react";
import './ApplicationCard.css'

const ApplicationCard = ({ jobId, walkerId, status }) => {
    return (
        <div className="ApplicationCard">
            <div className="ApplicationCard-body">
                <section>
                    <img className="ApplicationCard-img" src="https://static.thenounproject.com/png/5034901-200.png" alt="profile picture" />
                </section>

                <section>
                    <h5>Job Id: {jobId} </h5>
                    <h5>Walker Id: {walkerId}</h5>
                    <h5>Status: {status}</h5>
                </section>

                <button className="btn btn-primary ApplicationCard-hireBtn">Hire</button>
                <button className="btn btn-danger ApplicationCard-rejectBtn">Reject</button>
            </div>

        </div>
    )
}

export default ApplicationCard;