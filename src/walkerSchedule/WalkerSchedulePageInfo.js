import React, { useContext, useState, useEffect } from "react";
import moment from "moment";
import GlobalContext from "../helper/GlobalContext";
import "./WalkerSchedulePageInfo.css"


const WalkerSchedulePageInfo = ({ date, time, duration, status, petIds, address, city, state, zipcode }) => {
    const { currUser } = useContext(GlobalContext)
    console.log(status)

    const formatedDate = moment(date).format('M-D-YYYY')
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');


    return (
        <div className="WalkerSchedulePageInfo">
            <h5>Status: {status}</h5>
            <h5>Date of walk: {formatedDate}</h5>
            <h5>Time of walk: {formattedTime}</h5>
            <h5>Length of walk: {duration} minutes</h5>
            {status === "Hired" || status === "Completed" ?
                (<h5 >Address: {address}</h5>)
                :
                (<h5>Address: Full address will reveal upon hiring</h5>)
            }


            <h5>City: {city}</h5>
            <h5>State: {state}</h5>
            <h5>Zipcode: {zipcode}</h5>


        </div>
    )
}

export default WalkerSchedulePageInfo