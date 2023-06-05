import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import SchedulePageJobInfo from "./SchedulePageScheduleInfo";
import "./SchedulePage.css"

const SchedulePage = () => {
    const { id } = useParams();
    const [job, setJob] = useState([])
    const [pets, setPets] = useState([])

    async function getSchedule() {
        const res = await Api.getJobById(id)
        setJob(res.job[0])

        setPets(await getPets(res.job[0]['pet_ids']))

    }

    // Get pets that will be on this walk schedule
    async function getPets(ids) {
        const petIds = ids
        const res = await Api.getMultiPetsProfile(petIds)
        return res.pets
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

            <section>
                <h1>{pets.map(pet => pet.name)}</h1>
            </section>
        </div>
    )
}

export default SchedulePage;

