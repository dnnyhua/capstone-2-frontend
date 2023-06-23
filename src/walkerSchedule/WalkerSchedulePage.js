import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Api from "../api";
import WalkerSchedulePageJobInfo from "../schedule/SchedulePageInfo";
import PetThumbnail from "../pet/PetThumbnail";
import { Link } from "react-router-dom";
import "./WalkerSchedulePage.css"
import GlobalContext from "../helper/GlobalContext";


const WalkerSchedulePage = () => {
    const { currUser } = useContext(GlobalContext);
    const { id } = useParams();
    const [job, setJob] = useState([]);
    const [isHired, setIsHired] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    async function getSchedulePageInfo() {

        const res = await Api.getJobById(id)
        setJob(res.job[0])

        // need to get pets that is going on the walk
    }

    useEffect(() => {
        getSchedulePageInfo();
    }, [])


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);

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
    // console.log(job)
    // console.log(pets)


    // Need loading transition so that there is enough time for setSortedPets to update state before everything can render
    // if (!sortedPets) {
    //     return <div>
    //         <h1>Loading...</h1>
    //     </div>;
    // }


    return (
        <div>
            <section>
                <h1>Walk Schedule</h1>
                <WalkerSchedulePageJobInfo
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

            {/* <section>
                <h2>Pets on this walk</h2>
                {sortedPets.map(pet => (
                    <PetThumbnail
                        id={pet.id}
                        img={pet.img}
                        name={pet.name}
                    />
                ))}
            </section> */}


        </div>
    )
}

export default WalkerSchedulePage;
