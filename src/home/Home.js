import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import PetsList from "../pet/PetsList";
import ScheduleList from "../schedule/ScheduleList";
import WalkerScheduleList from "../walkerSchedule/WalkerScheduleList";
import JobsList from "../jobs/JobsList";
import SearchJobform from "../forms/SearchJobForm";
import AddJobFormModal from "../forms/AddJobFormModal";
import GlobalContext from "../helper/GlobalContext";

const Home = () => {
    const { pets, jobs, allJobs, currUser, searchJob, getJobs, getAppliedJobs, isLoggedIn } = useContext(GlobalContext)

    // For pagination
    const [page, setPage] = useState(1);

    async function getFilteredJobsOwner(status) {
        await getJobs(currUser.ownerId, status)
    }

    async function getFilteredJobsWalker(status) {
        await getAppliedJobs(currUser.walkerId, status, currUser.appliedJobsIds)
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };



    if (currUser && currUser.role === "dog owner") {
        return (
            <div className="Home">
                <h1 className="title">Walkies</h1>

                <div className="Home-body">
                    <section className="scheduleContainer">
                        <h2 className="mb-2">Upcoming Walks</h2>
                        <AddJobFormModal currUser={currUser} />
                        <div className="sortingBtns">
                            <button className="sortingBtn" onClick={() => getFilteredJobsOwner("scheduled")}>Scheduled</button>
                            <button className="sortingBtn" onClick={() => getFilteredJobsOwner("pending")}>Pending</button>
                            <button className="sortingBtn" onClick={() => getFilteredJobsOwner("all")}>All</button>
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
            <div className="Home-walker">
                <h1 className="title">Walkies</h1>

                <div className="Home-walker-body">
                    <section className="walker-scheduleContainer">
                        <h2 className="mb-2">Upcoming Walks</h2>
                        <div className="sortingBtns">
                            <button className="sortingBtn" onClick={() => getFilteredJobsWalker("scheduled")}>Scheduled</button>
                            <button className="sortingBtn" onClick={() => getFilteredJobsWalker("pending")}>Pending</button>
                            <button className="sortingBtn" onClick={() => getFilteredJobsWalker("archived")}>Archived</button>
                        </div>
                        < WalkerScheduleList jobs={jobs} />
                    </section>

                    <div className="jobs">
                        <SearchJobform
                            searchJob={searchJob}
                            setPage={setPage}
                            page={page}
                        />
                        <JobsList allJobs={allJobs} />
                        <div className="NxtPrevBtnGrp">
                            <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
                            <button onClick={handleNextPage} disabled={(allJobs && allJobs.length < 10) || allJobs === undefined}>Next</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


    return (
        <div className="Home d-flex justify-content-center" >
            <div className={!isLoggedIn ? "Home-guest-show" : "Home-guest-hide"}>
                <h1 className="title">Walkies</h1>

                <div className="Home-guest-btnGrp">
                    <Link to={'/login'}>
                        <button className="btn btn-primary Home-guest-btn">Login</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button className="btn btn-secondary Home-guest-btn">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )




}

export default Home

