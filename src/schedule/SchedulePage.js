import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import SchedulePageInfo from "./SchedulePageInfo";
import PetThumbnail from "../pet/PetThumbnail";
import { Link, useNavigate } from "react-router-dom";
import EditJobFormModal from "../forms/EditJobFormModal";
import "./SchedulePage.css"
import GlobalContext from "../helper/GlobalContext";



const SchedulePage = () => {
    const { pets, currUser } = useContext(GlobalContext);
    const { id } = useParams();
    const [job, setJob] = useState([]);
    const [applications, setApplications] = useState([]);
    const [hiredWalker, setHiredWalker] = useState()

    const [sortedPets, setSortedPets] = useState(null);
    // const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    async function getSchedulePageInfo() {

        const res = await Api.getJobById(id)
        setJob(res.job[0])

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

    async function updateJob(username, JobId, formData) {
        await Api.updateJob(username, JobId, formData)
        getSchedulePageInfo();
    }

    useEffect(() => {
        getSchedulePageInfo();
    }, [])



    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 200);

    //     return () => {
    //         clearTimeout(timer);
    //     };

    // }, []);

    if (!sortedPets) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    // console.log(pets)
    // console.log(applications)
    // console.log(sortedPets)

    return (
        <div className="SchedulePage">
            <Link className="SchedulePage-backBtn" onClick={goBack}>Back</Link>
            <h1>Walk Information</h1>
            {/* Only show button if there there are applications */}
            {applications.length !== 0 ?
                <Link to={`/schedule/${id}/applications`} className="btn btn-primary viewAppBtn">View Applications</Link>
                : null
            }

            <section className="SchedulePageJobInfo-section">
                {/* Only allow edit if no one has applied to the job yet. */}
                {applications.length === 0 && (
                    <div>
                        <EditJobFormModal job={job} updateJob={updateJob} />
                    </div>
                )}

                <SchedulePageInfo
                    date={job.date}
                    time={job.time}
                    duration={job.duration}
                    status={job.status}
                    address={job.address}
                    city={job.city}
                    state={job.state}
                    zipcode={job.zipcode}
                    ownerId={job.ownerId}
                />
            </section>

            <section className="SchedulePage-petsSection">
                <h3>Pets on this walk</h3>
                <div className="SchedulePage-petsList">
                    {sortedPets.map(pet => (
                        <PetThumbnail
                            key={pet.id}
                            id={pet.id}
                            img={pet.img}
                            name={pet.name}
                        />
                    ))}
                </div>
            </section>

            {/* Show walker info IF they are hired for the walk */}
            {hiredWalker ?
                <section>
                    <h2>Walker hired for this walk</h2>
                    <section className="walkerContainer">
                        <div className="walkerBody">
                            <section>
                                <img className="walkerImg" src={hiredWalker.profileImage} alt="walker Profile" />
                            </section>

                            <section className="walkerInfo">
                                <h5>{hiredWalker.firstName} {hiredWalker.lastName}</h5>

                                <h5>Rate: ${hiredWalker.rate} / 30 min</h5>
                            </section>
                        </div>
                    </section>
                </section>
                : ""
            }
        </div>
    )
}

export default SchedulePage;



