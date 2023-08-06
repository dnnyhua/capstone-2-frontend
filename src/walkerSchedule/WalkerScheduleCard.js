import React from "react";
import { Link } from "react-router-dom";
import "./WalkerScheduleCard.css"
// import moment from 'moment';
import dogPawIcon from '../images/dog-paw-icon.png';
import dayjs from 'dayjs';



const WalkerScheduleCard = ({ id, date, time, duration, status }) => {

    const formattedDate = dayjs(date).format('M-D-YYYY')
    const day = dayjs(date).format('dddd');
    console.log(day)
    const formattedTime = dayjs(`1970-01-01T${time}`).format('h:mm A');

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


