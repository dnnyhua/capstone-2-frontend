import React from "react";
import { Link } from "react-router-dom";
import "./WalkerScheduleCard.css"
// import moment from 'moment';
import dogPawIcon from '../images/dog-paw-icon.png';
import dayjs from 'dayjs';

const getFormattedDate = (date) => {
    return dayjs(date).format('M-D-YYYY');
};

const getFormattedTime = (time) => {
    return dayjs(`1970-01-01T${time}`).format('h:mm A');
};

const getDayOfWeek = (date) => {
    return dayjs(date).format('dddd');
};

const WalkerScheduleCard = ({ id, date, time, duration, status }) => {
    const formattedDate = getFormattedDate(date);
    const day = getDayOfWeek(formattedDate);
    const formattedTime = getFormattedTime(time);

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
    );
};


// const WalkerScheduleCard = ({ id, date, time, duration, status }) => {
//     const formatedDate = moment(date).format('M-D-YYYY')
//     const day = moment(formatedDate).format('dddd');
//     const formattedTime = moment(time, 'HH:mm').format('h:mm A');

//     return (
//         <Link to={`/schedule/${id}`} >
//             <div className="WalkerScheduleCard" id={id}>
//                 <div className="row ">
//                     <img src={dogPawIcon} className="dogPawIcon" alt="" />
//                     <div className="col-md-2 py-3 px-2 dow">
//                         {day}
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {formatedDate}
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {formattedTime}
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {duration} mins
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {status}
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     )
// }

// export default WalkerScheduleCard;



// const getFormattedDate = (date) => {
//     const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
//     return new Date(date).toLocaleDateString(undefined, options);
// };

// const getFormattedTime = (time) => {
//     const options = { hour: 'numeric', minute: 'numeric', hour12: true };
//     return new Date(`1970-01-01T${time}`).toLocaleTimeString(undefined, options);
// };

// const getDayOfWeek = (date) => {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysOfWeek[new Date(date).getDay()];
// };

// const WalkerScheduleCard = ({ id, date, time, duration, status }) => {
//     const formattedDate = getFormattedDate(date);
//     const day = getDayOfWeek(date);
//     const formattedTime = getFormattedTime(time);

//     return (
//         <Link to={`/schedule/${id}`} >
//             <div className="WalkerScheduleCard" id={id}>
//                 <div className="row ">
//                     <img src={dogPawIcon} className="dogPawIcon" alt="" />
//                     <div className="col-md-2 py-3 px-2 dow">
//                         {day}
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {formattedDate}
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {formattedTime}
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {duration} mins
//                     </div>
//                     <div className="col-md-2 py-3 px-2">
//                         {status}
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

export default WalkerScheduleCard;


