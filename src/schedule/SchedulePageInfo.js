import React, { useContext } from "react";
import GlobalContext from "../helper/GlobalContext";
import "./SchedulePageInfo.css"
import capitalizeWords from "../helper/Capitalized";
import CustomDateTime from "../helper/CustomDates";


const SchedulePageInfo = ({ date, time, duration, status, address, city, state, zipcode, ownerId }) => {
    const { currUser } = useContext(GlobalContext)
    const formattedDate = CustomDateTime.getFormattedDate(date);
    const formattedTime = CustomDateTime.getFormattedTime(time);

    return (
        <div className="SchedulePageInfo">
            <h5>Status: {status}</h5>
            <h5>Date of walk: {formattedDate}</h5>
            <h5>Time of walk: {formattedTime}</h5>
            <h5>Length of walk: {duration} minutes</h5>

            {ownerId && ownerId === currUser.ownerId ? (
                <h5 className="address" >Address: {capitalizeWords(address)}</h5>
            ) : (
                <h5>Address: </h5>
            )
            }
            <h5>City: {capitalizeWords(city)}</h5>
            <h5>State: {capitalizeWords(state)}</h5>
            <h5>Zipcode: {zipcode}</h5>
        </div>
    )
}

export default SchedulePageInfo