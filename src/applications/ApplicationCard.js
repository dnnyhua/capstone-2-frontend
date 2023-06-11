import React from "react";
import './ApplicationCard.css'

const ApplicationCard = ({ jobId, walkerId, status, firstName, lastName, ratePer30min }) => {
    return (
        <div className={`ApplicationCard ${status === "Hired" ? "hired" : ""}`} >
            <div className="ApplicationCard-body">
                <section>
                    <img className="ApplicationCard-img" src="https://static.thenounproject.com/png/5034901-200.png" alt="profile picture" />
                </section>

                <section>
                    <h5>Job Id: {jobId} </h5>
                    <h5>Walker Id: {walkerId}</h5>
                    <h5>Status: {status}</h5>
                    <h5>{firstName}</h5>
                    <h5>{lastName}</h5>
                    <h5>Rate: ${ratePer30min} / 30 min</h5>
                </section>


                {status === 'Pending Review' ?
                    <section>
                        <button className="btn btn-primary ApplicationCard-hireBtn">Hire</button>
                        <button className="btn btn-danger ApplicationCard-rejectBtn">Reject</button>
                    </section>
                    :
                    <section>
                        <button disabled className="btn btn-secondary ApplicationCard-hireBtn">Hire</button>
                        <button disabled className="btn btn-secondary ApplicationCard-rejectBtn">Reject</button>
                    </section>
                }
            </div>
        </div >
    )
}

export default ApplicationCard;