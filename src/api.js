import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class Api {
    static token


    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${Api.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    static async getUserData(username) {
        const res = await this.request(`users/${username}`)
        const { role } = res.user

        if (role === "dog owner") {
            const result = await this.request(`owners/${username}`)
            const { ownerId, pets, jobPostings } = result.owner;
            Object.assign(res.user, { pets, jobPostings, ownerId });
        }
        return res
    }

    static async userLogin(formData) {
        const res = await this.request("auth/token", formData, "post")
        return res
    }

    static async profileUpdate(username, formData) {
        const res = await this.request(`users/${username}`, formData, "patch")
        return res
    }

    static async getJobs(ownerId) {
        const res = await this.request(`jobs/${ownerId}`)
        return res
    }

    static async addPet(formData) {
        const res = await this.request(`pets`, formData, "post")
    }

    static async getPetProfile(id) {
        const res = await this.request(`owners/pet/${id}`)
        return res;
    }

    static async createJob(username, formData) {
        const res = await this.request(`jobs/${username}`, formData, "post")
    }
}


export default Api