import React from "react";
import { Link } from "react-router-dom";
import "./WalkerScheduleCard.css"
import dogPawIcon from '../images/dog-paw-icon.png';
import CustomDateTime from "../helper/CustomDates";


const WalkerScheduleCard = ({ id, date, time, duration, status }) => {

    const formattedDate = CustomDateTime.getFormattedDate(date);
    const day = CustomDateTime.getDayOfWeek(date);
    const formattedTime = CustomDateTime.getFormattedTime(time);

    return (
        <Link to={`/schedule/${id}`} >
            <div className="WalkerScheduleCard" id={id}>
                <div className="row ">
                    <img src={dogPawIcon} className="dogPawIcon" alt="" />
                    <div className="col-md-2 py-3 px-2 dow">
                        {day}
                    </div>
                    <div className="col-md-2 py-3 px-2">
                        {formattedDate}
                    </div>
                    <div className="col-md-2 py-3 px-2">
                        {formattedTime}
                    </div>
                    <div className="col-md-2 py-3 px-2">
                        {duration} mins
                    </div>
                    <div className="col-md-2 py-3 px-2">
                        {status}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WalkerScheduleCard;


