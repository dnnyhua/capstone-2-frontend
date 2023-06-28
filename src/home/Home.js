import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import PetsList from "../pet/PetsList";
import ScheduleList from "../schedule/ScheduleList";
import WalkerScheduleList from "../walkerSchedule/WalkerScheduleList";
import JobsList from "../jobs/JobsList";
import SearchJobform from "../forms/SearchJobForm";
import GlobalContext from "../helper/GlobalContext";
import Api from "../api";

const Home = () => {
    const { pets, jobs, allJobs, currUser } = useContext(GlobalContext)
    const [isLoading, setIsLoading] = useState(true)

    // console.log(currUser)
    // console.log(jobs)
    // console.log(pets)
    console.log(allJobs)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


    if (currUser && currUser.role === "dog owner") {
        return (
            <div className="Home">
                <h1 className="title">Walkies</h1>

                <div className="body-info">
                    <section className="scheduleContainer">
                        <h2 className="mb-2">Upcoming Walks</h2>
                        <ScheduleList jobs={jobs} currUser={currUser} />
                    </section>

                    <section className="petsContainer">
                        <h2>Your Pets</h2>
                        <PetsList pets={pets} />
                    </section>
                </div>
            </div>
        )
    }

    if (currUser && currUser.role === "dog walker") {
        return (
            <div className="Home">
                <h1 className="title">Walkies</h1>

                <div className="body-info">
                    <section className="scheduleContainer">
                        <h2 className="mb-2">Upcoming Walks</h2>
                        < WalkerScheduleList jobs={jobs} />
                    </section>
                </div>

                <div className="jobs">
                    <h1>Search Jobs</h1>
                    <SearchJobform />
                    <JobsList allJobs={allJobs} />
                </div>


            </div>
        )
    }




    return (
        <div className="Home d-flex justify-content-center">
            <div>
                <h1>Walkies</h1>
                <Link to={'/login'}>
                    <button className="btn btn-primary">Login</button>
                </Link>
                <Link>
                    <button className="btn btn-secondary">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Home 