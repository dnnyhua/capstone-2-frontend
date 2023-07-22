import React from "react";
import "./WalkerScheduleList.css"
import WalkerScheduleCard from "./WalkerScheduleCard";

const WalkerScheduleList = ({ jobs }) => {
    return (
        <div className="WalkerScheduleList">

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
