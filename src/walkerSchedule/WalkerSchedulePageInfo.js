import React from "react";
import "./WalkerSchedulePageInfo.css"
import capitalizeWords from "../helper/Capitalized";
import dayjs from "dayjs";

const WalkerSchedulePageInfo = ({ date, time, duration, status, address, city, state, zipcode }) => {
    console.log(time)
    const formattedDate = dayjs(date).format('M-D-YYYY')
    const formattedTime = dayjs(`1970-01-01T${time}`).format('h:mm A');

    return (
        <div className="WalkerSchedulePageInfo">
            <h5>Status: {status}</h5>
            <h5>Date of walk: {formattedDate}</h5>
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