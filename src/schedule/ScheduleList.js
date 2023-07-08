import React, { useContext } from "react";
import "./ScheduleList.css"
import ScheduleCard from "./ScheduleCard";

const ScheduleList = ({ jobs }) => {
    return (
        <div className="ScheduleList">
            {jobs && jobs.map(job => (
                <ScheduleCard
                    key={job.id}
                    id={job.id}
                    date={job.date}
                    time={job.time}
                    duration={job.duration}
                    status={job.status}
                />
            ))}
        </div>
    )
}

export default ScheduleList;

