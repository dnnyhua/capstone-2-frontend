import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleCard.css"

import moment from 'moment';

const ScheduleCard = ({ id, date, time, status }) => {
    const formatedDate = moment(date).format('MM-DD-YYYY')
    const day = moment("07-04-2023").format('dddd');

    const formattedTime = moment(time, 'HH:mm').format('hh:mm A');


    return (
        <Link>
            <div className="ScheduleCard" id={id}>
                <div className="container ">
                    <div className="row ">
                        <div className="col-sm">
                            {day}
                        </div>
                        <div className="col-sm">
                            {formatedDate}
                        </div>
                        <div className="col-sm">
                            {formattedTime}
                        </div>
                        <div className="col-sm">
                            {status}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ScheduleCard;



