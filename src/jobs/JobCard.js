import React from "react";
import moment from 'moment';



const JobCard = ({ date, time, city, state, zipcode }) => {
    const formatedDate = moment(date).format('M-D-YYYY')
    const day = moment(formatedDate).format('dddd');
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');
    return (
        <div className="JobCard">
            <h5>{day}</h5>
            <h5>{formatedDate}</h5>
            <h5>{formattedTime}</h5>
            <h5>{city}</h5>
            <h5>{state}</h5>
            <h5>{zipcode}</h5>
        </div>
    )
}

export default JobCard;
