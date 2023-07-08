import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import PetsList from "../pet/PetsList";
import ScheduleList from "../schedule/ScheduleList";
import WalkerScheduleList from "../walkerSchedule/WalkerScheduleList";
import JobsList from "../jobs/JobsList";
import SearchJobform from "../forms/SearchJobForm";
import AddJobFormModal from "../forms/AddJobFormModal";

import GlobalContext from "../helper/GlobalContext";
import Api from "../api";

const Home = () => {
    const { pets, jobs, allJobs, currUser, searchJob, getJobs, getAppliedJobs } = useContext(GlobalContext)
    const [isLoading, setIsLoading] = useState(true)

    // For pagination
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState([]);

    async function getFilteredJobsOwner(status) {
        await getJobs(currUser.ownerId, status)
    }

    async function getFilteredJobsWalker(status) {
        await getAppliedJobs(currUser.walkerId, status, currUser.appliedJobsIds)
    }

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
        if (currUser && currUser.role === "dog walker") {
            searchJob(query, page)
        }
    }, [page])

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

                <div className="Home-body">
                    <section className="scheduleContainer">
                        <h2 className="mb-2">Upcoming Walks</h2>
                        <AddJobFormModal currUser={currUser} />
                        <div className="sortingBtns">
                            <a className="sortingBtn" onClick={() => getFilteredJobsOwner("scheduled")}>Scheduled</a>
                            <a className="sortingBtn" onClick={() => getFilteredJobsOwner("pending")}>Pending</a>
                            <a className="sortingBtn" onClick={() => getFilteredJobsOwner("all")}>All</a>
                        </div>
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
            <div className="Home-Walker">
                <h1 className="title">Walkies</h1>

                <div className="Home-Walker-body">
                    <section className="scheduleContainer">
                        <h2 className="mb-2">Upcoming Walks</h2>
                        <div className="sortingBtns">
                            <a className="sortingBtn" onClick={() => getFilteredJobsWalker("scheduled")}>Scheduled</a>
                            <a className="sortingBtn" onClick={() => getFilteredJobsWalker("pending")}>Pending</a>
                            <a className="sortingBtn" onClick={() => getFilteredJobsWalker("archived")}>Archived</a>
                        </div>
                        < WalkerScheduleList jobs={jobs} />
                    </section>

                    <div className="jobs">
                        <SearchJobform
                            searchJob={searchJob}
                            query={query}
                            setQuery={setQuery}
                        />
                        <JobsList allJobs={allJobs} />
                        <div className="NxtPrevBtnGrp">
                            <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
                            <button onClick={handleNextPage} disabled={allJobs && allJobs.length < 10 || allJobs === undefined}>Next</button>
                        </div>
                    </div>
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

