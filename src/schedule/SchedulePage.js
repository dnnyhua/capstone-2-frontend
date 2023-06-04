import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import SchedulePageJobInfo from "./SchedulePageScheduleInfo";
import "./SchedulePage.css"
import { parse } from "dotenv";

const SchedulePage = () => {
    const { id } = useParams();
    const [job, setJob] = useState([])
    const [pets, setPets] = useState()

    async function getSchedule() {
        const res = await Api.getJobById(id)
        setJob(res.job[0])
    }

    // Get pets that will be on this walk schedule
    async function getPets() {
        const res = await Api.getMultiPetsProfile(job.pet_ids)
        setPets(res)
        console.log(res)

    }




    useEffect(() => {
        getSchedule();
        getPets();
    }, [])

    console.log(job)
    console.log(pets)


    return (
        <div>
            <h1>Walk Schedule</h1>
            <SchedulePageJobInfo
                date={job.date}
                time={job.time}
                duration={job.duration}
                status={job.status}
                petIds={job.pet_ids}
            />
        </div>
    )
}

export default SchedulePage;

