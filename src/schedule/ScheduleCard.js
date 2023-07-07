import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleCard.css"

import moment from 'moment';

const ScheduleCard = ({ id, date, time, duration, status }) => {
    const formatedDate = moment(date).format('M-D-YYYY')
    const day = moment(formatedDate).format('dddd');
    const formattedTime = moment(time, 'HH:mm').format('h:mm A');

    console.log(status)

    return (
        <Link to={`/schedule/${id}`} >
            <div className="ScheduleCard" id={id}>
                <div className="row ">
                    <div className="col-md-2 py-3 px-3 dow">
                        <img src="../images/dog-paw-icon.png" alt="" />{day}
                    </div>
                    <div className="col-md-2 py-3 px-3">
                        {formatedDate}
                    </div>
                    <div className="col-md-2 py-3 px-3">
                        {formattedTime}
                    </div>
                    <div className="col-md-2 py-3 px-3">
                        {duration} mins
                    </div>
                    <div className="col-md-2 py-3 px-3">
                        {status}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ScheduleCard;



