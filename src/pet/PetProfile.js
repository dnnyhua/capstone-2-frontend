import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Api from "../api";
import ScheduleCard from "../schedule/ScheduleCard";
import "./PetProfile.css"


const PetProfile = () => {
    const { petId } = useParams();
    const [pet, setPet] = useState([])
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function setPetProfilePage() {
        const res = await Api.getPetProfile(petId)
        setPet(res.pet[0])
        setJobs(await getPetWalkSchedule(petId))
    }

    async function getPetWalkSchedule() {
        const res = await Api.getPetWalkSchedule(petId)
        return res.job
    }

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        setPetProfilePage()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200)

        return () => {
            clearTimeout(timer);
        };

    }, []);

    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className="PetProfile">

            <div className="PetProfileBody">

                <section className="petProfileHead">
                    <Link to={`/pets/profile/${pet.id}/edit`} className="btn btn-primary editBtn">Edit</Link>

                    <Link className="backBtn" onClick={goBack}>Back</Link>
                    <img src={pet.img} className="petPfp" alt="pet profile picture" />

                    <h2>{pet.name}</h2>
                </section>

                <section className="petInfo">
                    <h5>Breed: {pet.breed}</h5>
                    <h5>Gender: {pet.gender}</h5>
                    <h5>Age: {pet.age}</h5>
                    <h5>Weight (lbs): {pet.weight}</h5>
                    <h5>Friendly with children: {`${pet.friendlyWithChildren}` === 'true' ? "Yes" : "No"}</h5>
                    <h5>Friendly with other dogs: {`${pet.friendlyWithOtherDogs}` === 'true' ? "Yes" : "No"}</h5>
                    <h5>Additional Details: {pet.additionalDetails}</h5>
                </section>

                <section className="walkSchedule">
                    <h2>Upcoming Walks</h2>

                    {jobs.map(job => (
                        <ScheduleCard
                            key={job.id}
                            id={job.id}
                            date={job.date}
                            time={job.time}
                            duration={job.duration}
                            status={job.status}
                        />
                    ))}
                </section>
            </div>
        </div >
    )
}


export default PetProfile;
