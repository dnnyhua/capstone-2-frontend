import React from "react";
import moment from "moment";

const SchedulePageJobInfo = ({ date, time, duration, status, petIds }) => {

    const formatedDate = moment(date).format('M-D-YYYY')
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');

    return (
        <div className="SchedulePage">
            <h5>Date of walk: {formatedDate}</h5>
            <h5>Time of walk: {formattedTime}</h5>
            <h5>Length of walk: {duration} minutes</h5>
            <h5>Status: {status}</h5>
            <h5>Pet Ids: {petIds}</h5>


        </div>
    )
}

export default SchedulePageJobInfo