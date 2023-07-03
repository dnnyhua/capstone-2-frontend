import React, { useContext } from "react";
import "./WalkerScheduleList.css"
import GlobalContext from "../helper/GlobalContext";
import WalkerScheduleCard from "./WalkerScheduleCard";

const WalkerScheduleList = ({ jobs }) => {
    const { currUser, getAppliedJobs } = useContext(GlobalContext);

    async function getFilteredJobs(status) {
        await getAppliedJobs(currUser.walkerId, status, currUser.appliedJobsIds)
    }
    return (
        <div className="WalkerScheduleList">

            <div className="sortingBtns">
                <a className="sortingBtn" onClick={() => getFilteredJobs("scheduled")}>Scheduled</a>
                <a className="sortingBtn" onClick={() => getFilteredJobs("pending")}>Pending</a>
                <a className="sortingBtn" onClick={() => getFilteredJobs("archived")}>Archived</a>
            </div>

            {jobs && jobs.map(job => (
                <WalkerScheduleCard
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

export default WalkerScheduleList;
