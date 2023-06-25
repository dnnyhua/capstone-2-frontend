import React from "react";
import JobCard from "./JobCard";

const JobsList = ({ allJobs }) => {
    console.log(allJobs)
    return (
        <div>
            <h1>List of jobs will go below</h1>
            {allJobs && allJobs.map(job => (
                <JobCard
                    date={job.date}
                    time={job.time}
                    city={job.city}
                    state={job.state}
                    zipcode={job.zipcode}
                />
            ))}
        </div>
    )
}

export default JobsList;