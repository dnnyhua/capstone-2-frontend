import React, { useEffect, useState, useContext } from "react";
import './ApplicationCard.css'
import Api from "../api";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../helper/GlobalContext";

const ApplicationCard = ({ jobId, walkerId, status, firstName, lastName, ratePer30min, getApplications }) => {
    const { getCurrUserData } = useContext(GlobalContext);

    const [isRejected, setIsRejected] = useState(false);
    const [currStatus, setCurrStatus] = useState(status)


    // THIS IS NOT RE_RENDERING
    async function hireWalker() {
        try {
            setCurrStatus("Hired")
            await Api.hireWalker(jobId, walkerId)
        } catch (err) {
            console.error("Error hiring walker:", err)
        }
    }

    const handleHireBtn = async () => {
        await hireWalker();
        getCurrUserData();
    }

    async function rejectWalker() {
        try {
            setIsRejected(true)
            setCurrStatus("")
            await Api.rejectWalker(jobId, walkerId)
        } catch (err) {
            console.error("Error rejecting walker: err")
        }

    }

    const handleRejectBtn = async () => {
        rejectWalker();
        getApplications();
    }

    useEffect(() => {
    }, [isRejected, setIsRejected, currStatus, getCurrUserData])


    console.log(currStatus)

    return (
        <div className={`ApplicationCard ${currStatus === "Hired" ? "hired" : ""}`} >
            <div className="ApplicationCard-body">
                <section>
                    <img className="ApplicationCard-img" src="https://static.thenounproject.com/png/5034901-200.png" />
                </section>

                <section>
                    <h5>Job Id: {jobId} </h5>
                    <h5>Walker Id: {walkerId}</h5>
                    <h5>{firstName} {lastName}</h5>
                    <h5>Rate: ${ratePer30min} / 30 min</h5>
                    <h5>Add bio here; need to update schema and seed file</h5>
                </section>

                {currStatus === 'Pending Review' ? (
                    <section>
                        <button className="btn btn-primary ApplicationCard-hireBtn" onClick={handleHireBtn} disabled={isRejected}>Hire</button>
                        <button className="btn btn-danger ApplicationCard-rejectBtn" onClick={handleRejectBtn} disabled={isRejected}>Reject</button>
                    </section>
                ) : (
                    <section>
                        <button disabled className="btn btn-secondary ApplicationCard-hireBtn" >Hire</button>
                        <button disabled className="btn btn-secondary ApplicationCard-rejectBtn">Reject</button>
                    </section>
                )}
            </div>
        </div >
    )
}

export default ApplicationCard;