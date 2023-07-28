import React, { useState, useEffect } from "react";
import "./WalkerScheduleList.css"
import WalkerScheduleCard from "./WalkerScheduleCard";

const WalkerScheduleList = ({ jobs }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <div className="WalkerScheduleList">
                <h3>Loading...</h3>
            </div>
        );
    }

    if (!jobs.length) {
        return (
            <div className="WalkerScheduleList">
                <h3>Apply for jobs to get started</h3>
            </div>
        )
    }

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
