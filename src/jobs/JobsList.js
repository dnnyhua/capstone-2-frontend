import React from "react";
import JobCard from "./JobCard";
import "./JobsList.css"

const JobsList = ({ allJobs }) => {
    return (
        <div className="JobsList" id="JobsList">
            {allJobs && allJobs.map(job => (
                <JobCard
                    key={job.id}
                    id={job.id}
                    date={job.date}
                    time={job.time}
                    duration={job.duration}
                    city={job.city}
                    state={job.state}
                    zipcode={job.zipcode}
                    numPets={job.petIds.split(",")}
                />
            ))}
        </div>
    )
}

export default JobsList;