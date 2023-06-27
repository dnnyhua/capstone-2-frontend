import React from "react";
import moment from 'moment';
import "./JobCard.css"



const JobCard = ({ date, time, city, state, zipcode, duration, numPets }) => {
    const formatedDate = moment(date).format('M-D-YYYY')
    const day = moment(formatedDate).format('dddd');
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');
    return (
        <div className="JobCard" id="JobCard">
            <h5>{day} | {formatedDate}</h5>
            <h6>Time: {formattedTime}</h6>
            <h6>Duration: {duration} mins</h6>
            <h6># of dogs on this walk : {numPets.length}</h6>
            <h6>City: {city}</h6>
            <h6>State: {state}</h6>
            <h6>Zipcode: {zipcode}</h6>
            <button className="btn btn-primary applyBtn">Apply</button>
        </div>
    )
}

export default JobCard;
