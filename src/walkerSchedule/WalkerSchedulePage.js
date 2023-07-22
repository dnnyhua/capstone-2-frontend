import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import WalkerSchedulePageInfo from "./WalkerSchedulePageInfo";
import PetThumbnail from "../pet/PetThumbnail";
// import { Link } from "react-router-dom";
import "./WalkerSchedulePage.css"
import GlobalContext from "../helper/GlobalContext";

const WalkerSchedulePage = () => {
    const { currUser } = useContext(GlobalContext);
    const { id } = useParams();
    const [job, setJob] = useState([]);
    const [pets, setPets] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const [jobStatus, setJobStatus] = useState();

    async function getPageInfo() {

        // Get info on job posting
        const res = await Api.getJobById(id)
        setJob(res.job[0])

        // Check if walker was hired to reveal address
        if (currUser) {
            const result = await Api.checkJobStatus(currUser.walkerId, id)
            setJobStatus(result.status)
        }


        // Get pets that are going on the walk to display on page
        const petsRes = await Api.getMultiPetsProfile(res.job[0].petIds)
        setPets(petsRes.pets)
    }

    useEffect(() => {
        getPageInfo();
    }, [currUser])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 500);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);

    if (!currUser || !jobStatus) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    // console.log(job)
    // console.log(pets)

    return (
        <div className="WalkerSchedulePage">
            <section className="WalkerSchedulePage-section">
                <h1>Walk Information</h1>
                <WalkerSchedulePageInfo
                    id={id}
                    date={job.date}
                    time={job.time}
                    duration={job.duration}
                    status={jobStatus}
                    address={job.address}
                    city={job.city}
                    state={job.state}
                    zipcode={job.zipcode}
                    ownerId={job.ownerId}
                />
            </section>

            <section className="WalkerSchedulePage-petsSection">
                <h3>Pets on this walk:</h3>
                <div className="WalkerSchedulePage-petsList">
                    {pets.map(pet => (
                        <PetThumbnail
                            key={pet.id}
                            id={pet.id}
                            img={pet.img}
                            name={pet.name}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default WalkerSchedulePage;
