import React, { useContext } from "react";
import GlobalContext from "../helper/GlobalContext";
import "./SchedulePageInfo.css"
import dayjs from 'dayjs';
import capitalizeWords from "../helper/Capitalized";



const SchedulePageInfo = ({ date, time, duration, status, address, city, state, zipcode, ownerId }) => {
    const { currUser } = useContext(GlobalContext)
    const formattedDate = dayjs(date).format('M-D-YYYY')
    const formattedTime = dayjs(`1970-01-01T${time}`).format('h:mm A');

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