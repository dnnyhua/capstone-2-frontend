import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleCard.css"
import dogPawIcon from '../images/dog-paw-icon.png';
import CustomDateTime from "../helper/CustomDates";

const ScheduleCard = ({ id, date, time, duration, status }) => {
    const formattedDate = CustomDateTime.getFormattedDate(date);
    const day = CustomDateTime.getDayOfWeek(date);
    const formattedTime = CustomDateTime.getFormattedTime(time);

    return (
        <Link to={`/schedule/${id}`} >
            <div className="ScheduleCard" id={id}>
                <div className="row ">
                    <div className="custom-row-item col-md-1">
                        <img src={dogPawIcon} className="dogPawIcon " alt="" />
                    </div>

                    <div className="custom-row-item col-md-2 py-3 px-2 dow">
                        {day}
                    </div>
                    <div className="custom-row-item col-md-2 py-3 px-2">
                        {formattedDate}
                    </div>
                    <div className="custom-row-item col-md-2 py-3 px-2">
                        {formattedTime}
                    </div>
                    <div className="custom-row-item col-md-2 py-3 px-2">
                        {duration} mins
                    </div>
                    <div className="custom-row-item row-item-status col-md-2 py-3 px-2">
                        {status}
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default ScheduleCard;



