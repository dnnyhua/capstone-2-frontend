import React from "react";
import moment from "moment";
import "./WalkerSchedulePageInfo.css"
import capitalizeWords from "../helper/Capitalized";

const WalkerSchedulePageInfo = ({ date, time, duration, status, petIds, address, city, state, zipcode }) => {
    const formatedDate = moment(date).format('M-D-YYYY')
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');

    return (
        <div className="WalkerSchedulePageInfo">
            <h5>Status: {status}</h5>
            <h5>Date of walk: {formatedDate}</h5>
            <h5>Time of walk: {formattedTime}</h5>
            <h5>Length of walk: {duration} minutes</h5>
            {status === "Hired" || status === "Completed" ?
                (<h5 >Address: {capitalizeWords(address)}</h5>)
                :
                (<h5>Address: Full address will reveal upon hiring</h5>)
            }

            <h5>City: {capitalizeWords(city)}</h5>
            <h5>State: {capitalizeWords(state)}</h5>
            <h5>Zipcode: {zipcode}</h5>
        </div>
    )
}

export default WalkerSchedulePageInfo