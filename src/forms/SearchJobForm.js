import React, { useState } from "react";

const SearchJobform = () => {

    const initialState = {
        city: "",
        state: "",
        zipcode: ""
    }
    const [query, setQuery] = useState(initialState);


    const handleChange = (evt) => {
        const { name, value } = evt.target
        setQuery(data => ({
            ...data,
            [name]: value
        }))

    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // searchFunction(query)
        console.log(query)
    }

    return (
        <div>
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

                <button type="submit">Search</button>

            </form>
        </div>
    )
}

export default SearchJobform;
