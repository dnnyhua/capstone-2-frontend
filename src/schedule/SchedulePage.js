import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import SchedulePageJobInfo from "./SchedulePageScheduleInfo";
import PetsList from "../pet/PetsList";
import PetThumbnail from "../pet/PetThumbnail";
import "./SchedulePage.css"
import GlobalContext from "../helper/GlobalContext";

const SchedulePage = () => {
    const { pets } = useContext(GlobalContext)
    const { id } = useParams();
    const [job, setJob] = useState([])
    // const [pets2, setPets] = useState([])
    const [sortedPets, setSortedPets] = useState(null)

    async function getSchedule() {
        const res = await Api.getJobById(id)
        setJob(res.job[0])

        // setPets(await getPets(res.job[0]['pet_ids']))

        let idsToCheck = res.job[0]['petIds']
        console.log(idsToCheck)

        let currPets = pets

        let petsToShow = [];

        currPets.forEach(pet => {
            if (idsToCheck.some(id => id === pet.id)) {
                petsToShow.push(pet);
            }

        });
        setSortedPets(petsToShow)



    }


    useEffect(() => {
        getSchedule();
        // getPets();
    }, [])

    useEffect(() => {
        console.log(job);
        console.log(sortedPets);
    }, [sortedPets]);




    // Get pets that will be on this walk schedule
    // async function getPets(ids) {
    //     const petIds = ids
    //     const res = await Api.getMultiPetsProfile(petIds)
    //     return res.pets
    // }

    // function sortPets(ids) {
    //     const idsToCheck = [job.pet_ids]
    //     const pets = [];

    //     job.forEach((job) => {
    //         if (pets.pet_ids.includes((id) => ids.includes(id))) {
    //             pets.push(job);
    //         }

    //     })
    // }


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
                Pets on this walk
                <PetsList pets={pets} />
            </section>
        </div>
    )
}

export default SchedulePage;

