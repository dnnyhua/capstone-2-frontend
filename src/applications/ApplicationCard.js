import React, { useEffect, useState, useContext } from "react";
import './ApplicationCard.css'
import Api from "../api";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../helper/GlobalContext";

const ApplicationCard = ({ jobId, walkerId, status, firstName, lastName, rate, bio, profileImage, getApplications }) => {
    const { getCurrUserData } = useContext(GlobalContext);
    const [isRejected, setIsRejected] = useState(false);
    const [currStatus, setCurrStatus] = useState(status)
    const [showModal, setShowModal] = useState(false);
    const [rejectBtnClicked, setRejectBtnClicked] = useState(false)

    const navigate = useNavigate()

    // THIS IS NOT RE_RENDERING
    async function hireWalker() {
        try {
            setCurrStatus("Hired")
            await Api.hireWalker(jobId, walkerId)
            navigate(-1)
        } catch (err) {
            console.error("Error hiring walker:", err)
        }
    }

    const handleHireConfirmation = async () => {
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

    const handleRejectConfirmation = async () => {
        rejectWalker();
        getApplications();
        handleModalCloseReject();
    }

    useEffect(() => {
    }, [isRejected, setIsRejected, currStatus, getCurrUserData])


    const handleModalOpenHire = () => {
        setShowModal(true);
    };

    const handleModalOpenReject = () => {
        setShowModal(true);
        setRejectBtnClicked(true)
    };

    const handleModalCloseHire = () => {
        setShowModal(false);
    };

    const handleModalCloseReject = () => {
        setShowModal(false);
        setRejectBtnClicked(false)

    };

    return (
        <div className={`ApplicationCard ${currStatus === "Hired" ? "hired" : ""}`} >
            <div className="ApplicationCard-body">
                <section>
                    <img className="ApplicationCard-img" src={profileImage} />
                </section>

                <section>
                    <h5>Job Id: {jobId} </h5>
                    <h5>Walker Id: {walkerId}</h5>
                    <h5>{firstName} {lastName}</h5>
                    <h5>Rate: ${rate} / 30 min</h5>
                    <h5>About Me: {bio}</h5>
                </section>

                {currStatus === 'Pending' ? (
                    <section>
                        <button className="btn btn-primary ApplicationCard-hireBtn" onClick={handleModalOpenHire} disabled={isRejected}>Hire</button>
                        <button className="btn btn-danger ApplicationCard-rejectBtn" onClick={handleModalOpenReject} disabled={isRejected}>Reject</button>
                    </section>
                ) : (
                    <section>
                        <button disabled className="btn btn-secondary ApplicationCard-hireBtn" >Hire</button>
                        <button disabled className="btn btn-secondary ApplicationCard-rejectBtn">Reject</button>
                    </section>
                )}
            </div>

            <div className={`acknowledgmentModal ${showModal ? 'show' : ''}`}>
                <div className="modal-dialog">
                    <div className={`modal-content ${showModal ? 'show' : ''}`}>
                        <div className="modal-header">
                            <h5 className="modal-title">Acknowledgement</h5>
                            {/* <button type="button" className="close" onClick={handleModalClose}>
                                <span>&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body">
                            {rejectBtnClicked === true ? (
                                <p>Are you sure you want to reject this application? This action cannot be undone.</p>
                            ) : (
                                <p>Once hired, you cannot select a different walker. Are you sure you want to hire this walker?</p>
                            )}

                        </div>
                        <div className="modal-footer">
                            {rejectBtnClicked === true ? (
                                <>
                                    <button type="button" className="btn btn-primary" onClick={handleRejectConfirmation}>
                                        Yes
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={handleModalCloseReject}>
                                        No
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button type="button" className="btn btn-primary" onClick={handleHireConfirmation}>
                                        Yes
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={handleModalCloseHire}>
                                        No
                                    </button>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ApplicationCard;