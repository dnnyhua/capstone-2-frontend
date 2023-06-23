import React, { useContext } from "react";
import "./WalkerScheduleList.css"
import GlobalContext from "../helper/GlobalContext";
import WalkerScheduleCard from "./WalkerScheduleCard";

const WalkerScheduleList = ({ jobs }) => {
    const { currUser } = useContext(GlobalContext);

    return (
        <div className="ScheduleList">

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
