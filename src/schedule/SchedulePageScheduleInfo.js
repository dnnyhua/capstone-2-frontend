import React, { useContext } from "react";
import moment from "moment";
import GlobalContext from "../helper/GlobalContext";


const SchedulePageJobInfo = ({ date, time, duration, status, petIds, address, city, state, zipcode, ownerId }) => {
    const { currUser } = useContext(GlobalContext)
    const formatedDate = moment(date).format('M-D-YYYY')
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');

    return (
        <div className="SchedulePage">
            <h5>Date of walk: {formatedDate}</h5>
            <h5>Time of walk: {formattedTime}</h5>
            <h5>Length of walk: {duration} minutes</h5>
            <h5>Status: {status}</h5>
            <h5>Pet Ids: {petIds}</h5>

            {ownerId === currUser.ownerId ? (
                <>
                    <h5>Address: {address}</h5>
                    <h5>City: {city}</h5>
                    <h5>State: {state}</h5>
                    <h5>Zipcode: {zipcode}</h5>
                </>
            ) : null
            }
        </div>
    )
}

export default SchedulePageJobInfo