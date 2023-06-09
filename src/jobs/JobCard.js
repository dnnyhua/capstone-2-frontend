import React, { useState, useContext, useEffect } from "react";
import moment from 'moment';
import "./JobCard.css"
import GlobalContext from "../helper/GlobalContext";
import capitalizeWords from "../helper/Capitalized";



const JobCard = ({ id, date, time, city, state, zipcode, duration, numPets }) => {
    const formatedDate = moment(date).format('M-D-YYYY')
    const day = moment(formatedDate).format('dddd');
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');
    const { applyToJob, currUser } = useContext(GlobalContext)
    const [applied, setApplied] = useState(false)

    async function apply() {
        await applyToJob(currUser, id)
        setApplied(true)
    }

    useEffect(() => {
        const checkIfApplied = (jobIdsArray, jobId) => {
            return jobIdsArray.includes(jobId);
        };

        const status = checkIfApplied(currUser.appliedJobsIds, id);
        setApplied(status);
    }, []);


    return (
        <div className="JobCard" id="JobCard">
            <h5>{day} | {formatedDate}</h5>
            <h6>Time: {formattedTime}</h6>
            <h6>Duration: {duration} mins</h6>
            <h6># of dogs on this walk : {numPets.length}</h6>
            <h6>City: {capitalizeWords(city)}</h6>
            <h6>State: {capitalizeWords(state)}</h6>
            <h6>Zipcode: {zipcode}</h6>
            <button className="btn applyBtn" onClick={apply} disabled={applied}>{applied === true ? "Applied" : "Apply"}</button>
        </div>
    )
}

export default JobCard;
