import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import SchedulePageJobInfo from "./SchedulePageScheduleInfo";
import PetThumbnail from "../pet/PetThumbnail";
import { Link } from "react-router-dom";
import "./SchedulePage.css"
import GlobalContext from "../helper/GlobalContext";


const SchedulePage = () => {
    const { pets, currUser } = useContext(GlobalContext);
    const { id } = useParams();
    const [job, setJob] = useState([]);
    const [applications, setApplications] = useState([]);
    const [hiredWalker, setHiredWalker] = useState()

    const [sortedPets, setSortedPets] = useState(null);


    async function getSchedulePageInfo() {

        const res = await Api.getJobById(id)
        setJob(res.job[0])

        // setPets(await getPets(res.job[0]['pet_ids']))

        const idsToCheck = res.job[0]['petIds']
        const currPets = pets
        const petsToShow = [];

        const appRes = await Api.getApplications(id, currUser.username)
        setApplications(appRes.applications)

        const hiredWalkerRes = await Api.getHiredWalker(id)
        setHiredWalker(hiredWalkerRes.user)

        currPets.forEach(pet => {
            if (idsToCheck.some(id => id === pet.id)) {
                petsToShow.push(pet);
            }
        });
        setSortedPets(petsToShow)

    }


    useEffect(() => {
        getSchedulePageInfo();
    }, [])

    // console.log(job)
    // console.log(pets)
    // console.log(applications)
    // console.log(sortedPets)
    console.log(hiredWalker)


    // Need loading transition so that there is enough time for setSortedPets to update state before everything can render
    if (!sortedPets) {
        return <div>
            <h1>Loading...</h1>
        </div>;
    }

    return (
        <div>
            <section>
                <h1>Walk Schedule</h1>
                <SchedulePageJobInfo
                    date={job.date}
                    time={job.time}
                    duration={job.duration}
                    status={job.status}
                    petIds={job.petIds}
                    address={job.address}
                    city={job.city}
                    state={job.state}
                    zipcode={job.zipcode}
                    ownerId={job.ownerId}
                />

                {/* Only show button if there there are applications */}
                {applications.length !== 0 ?
                    <Link to={`/schedule/${id}/applications`} className="btn btn-primary">View Applications</Link>
                    : null
                }

            </section>

            <section>
                <h2>Pets on this walk</h2>
                {sortedPets.map(pet => (
                    <PetThumbnail
                        id={pet.id}
                        img={pet.img}
                        name={pet.name}
                    />
                ))}
            </section>

            {hiredWalker ?
                <section>
                    <h2>Walker</h2>
                    <h5>{hiredWalker.firstName}</h5>
                    <h5>{hiredWalker.lastName}</h5>
                    <h5>{hiredWalker.ratePer30min}</h5>
                    <h5>{hiredWalker.status}</h5>
                </section>
                : ""
            }



        </div>
    )
}

export default SchedulePage;



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

