import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleCard.css"

import moment from 'moment';

const ScheduleCard = ({ id, date, time, duration, status }) => {
    const formatedDate = moment(date).format('M-D-YYYY')
    const day = moment(formatedDate).format('dddd');

    const formattedTime = moment(time, 'HH:mm').format('h:mm A');


    return (
        <Link to={`/schedule/${id}`} >
            <div className="ScheduleCard" id={id}>
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg py-3 px-2">
                            {day}
                        </div>
                        <div className="col-lg py-3 px-2">
                            {formatedDate}
                        </div>
                        <div className="col-lg py-3 px-2">
                            {formattedTime}
                        </div>
                        <div className="col-lg py-3 px-2">
                            {duration} mins
                        </div>
                        <div className="col-lg py-3 px-2">
                            {status}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ScheduleCard;



