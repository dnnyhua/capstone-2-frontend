import React, { useContext } from "react";
import "./ScheduleList.css"
import GlobalContext from "../helper/GlobalContext";
import AddJobFormModal from "../forms/AddJobFormModal";
import ScheduleCard from "./ScheduleCard";

const ScheduleList = ({ jobs }) => {


    return (
        <div className="ScheduleList">
            <AddJobFormModal />
            {jobs.map(job => (
                <ScheduleCard
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

