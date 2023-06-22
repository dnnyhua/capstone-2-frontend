import React, { useContext } from "react";
import "./ScheduleList.css"
import GlobalContext from "../helper/GlobalContext";
import AddJobFormModal from "../forms/AddJobFormModal";
import ScheduleCard from "./ScheduleCard";

const ScheduleList = ({ jobs }) => {
    const { currUser } = useContext(GlobalContext);

    return (
        <div className="ScheduleList">
            {currUser.role === "dog owner" ?
                <AddJobFormModal currUser={currUser} />
                : ""
            }

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

