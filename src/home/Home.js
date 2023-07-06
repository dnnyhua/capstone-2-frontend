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
    const { pets, jobs, allJobs, currUser, searchJob } = useContext(GlobalContext)
    const [isLoading, setIsLoading] = useState(true)

    // For pagination
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        if (currUser) {
            const initialState = {
                city: currUser.city,
                state: currUser.state,
                zipcode: currUser.zipcode
            };
            setQuery(initialState);
        }
    }, [currUser]);

    useEffect(() => {
        searchJob(query, page)
    }, [page])


    // console.log(jobs)
    // console.log(pets)
    // console.log(allJobs)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

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
                    <SearchJobform
                        searchJob={searchJob}
                        query={query}
                        setQuery={setQuery}
                    />
                    <JobsList allJobs={allJobs} />
                    <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
                    <button onClick={handleNextPage} disabled={allJobs && allJobs.length < 10 || allJobs === undefined}>Next</button>
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

