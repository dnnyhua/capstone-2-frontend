import React, { useState, useEffect } from "react";
import "./ScheduleList.css"
import ScheduleCard from "./ScheduleCard";

const ScheduleList = ({ jobs }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    if (isLoading) {
        return (
            <div className="ScheduleList">
                <h3>Loading...</h3>
            </div>
        );
    }

    if (!jobs.length) {
        return (
            <div className="ScheduleList">
                <h3>Schedule a walk to get started</h3>
            </div>
        )
    }

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

