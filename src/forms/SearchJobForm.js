import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../helper/GlobalContext";
import './SearchJobForm.css'

const SearchJobform = ({ searchJob, setPage, page }) => {

    const { currUser } = useContext(GlobalContext)
    const [query, setQuery] = useState({
        city: currUser.city,
        state: currUser.state,
        zipcode: currUser.zipcode,
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setQuery(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setPage(1)
        searchJob(query)
    }



    useEffect(() => {
        if (currUser.role === "dog walker") {
            searchJob(query)
        }
    }, [])

    useEffect(() => {
        if (currUser && currUser.role === "dog walker") {
            searchJob(query, page)
        }
    }, [page])

    return (
        <div className="SearchJobform">
            <form onSubmit={handleSubmit} className="form-control">
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={query.city}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    value={query.state}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Zipcode"
                    value={query.zipcode}
                    onChange={handleChange}
                />

                <button type="submit" className="searchBtn">Search</button>

            </form>
        </div>
    )
}

export default SearchJobform;
