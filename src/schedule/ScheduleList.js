import React, { useContext } from "react";
import "./ScheduleList.css"
import GlobalContext from "../helper/GlobalContext";
import ScheduleCard from "./ScheduleCard";

const ScheduleList = ({ jobs }) => {


    return (
        <div className="ScheduleList">
            {jobs.map(job => (
                <ScheduleCard
                    id={job.id}
                    date={job.date}
                    time={job.time}
                    status={job.status}
                />
            ))}
        </div>
    )
}

export default ScheduleList;

