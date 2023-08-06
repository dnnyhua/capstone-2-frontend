import React, { useState, useContext, useEffect } from "react";
import "./JobCard.css"
import GlobalContext from "../helper/GlobalContext";
import capitalizeWords from "../helper/Capitalized";
import CustomDateTime from "../helper/CustomDates";

const JobCard = ({ id, date, time, city, state, zipcode, duration, numPets }) => {
    const formattedDate = CustomDateTime.getFormattedDate(date);
    const day = CustomDateTime.getDayOfWeek(date);
    const formattedTime = CustomDateTime.getFormattedTime(time);

    const { applyToJob, currUser } = useContext(GlobalContext)
    const [applied, setApplied] = useState(false)

    // Update database when user clicks apply
    async function apply() {
        await applyToJob(currUser, id)
        setApplied(true)
    }

    // Checks to see if the jobcard being shown is a job the walker applied to already. The "applied" state will determine whether or not to disable the button functionality
    useEffect(() => {
        const checkIfApplied = (jobIdsArray, jobId) => {
            return jobIdsArray.includes(jobId);
        };

        const status = checkIfApplied(currUser.appliedJobsIds, id);
        setApplied(status);
    }, []);


    return (
        <div className="JobCard" id="JobCard">
            <h5>{day} | {formattedDate}</h5>
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
