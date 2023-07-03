import React, { useContext } from "react";
import "./ScheduleList.css"
import AddJobFormModal from "../forms/AddJobFormModal";
import ScheduleCard from "./ScheduleCard";
import GlobalContext from "../helper/GlobalContext";


const ScheduleList = ({ jobs, currUser }) => {
    const { getJobs } = useContext(GlobalContext)

    async function getFilteredJobs(status) {
        await getJobs(currUser.ownerId, status)
    }

    return (
        <div className="ScheduleList">
            <AddJobFormModal currUser={currUser} />

            <div className="sortingBtns">
                <a className="sortingBtn" onClick={() => getFilteredJobs("scheduled")}>Scheduled</a>
                <a className="sortingBtn" onClick={() => getFilteredJobs("pending")}>Pending</a>
                <a className="sortingBtn" onClick={() => getFilteredJobs("all")}>All</a>

            </div>

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

