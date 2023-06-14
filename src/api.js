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
        return res;
    }

    static async userLogin(formData) {
        const res = await this.request("auth/token", formData, "post")
        return res;
    }

    static async profileUpdate(username, formData) {
        const res = await this.request(`users/${username}`, formData, "patch")
        return res;
    }

    static async getJobs(ownerId) {
        const res = await this.request(`jobs/owner/${ownerId}`)
        return res;
    }

    static async getJobById(jobId) {
        const res = await this.request(`jobs/${jobId}`)
        return res;

    }

    static async getApplications(jobId, username) {
        const queryString = `?username=${JSON.stringify(username)}`;
        const res = await this.request(`jobs/${jobId}/applications${queryString}`)
        return res;



    }


    static async addPet(formData) {
        await this.request(`pets`, formData, "post")
    }

    static async getPetProfile(id) {
        const res = await this.request(`owners/pet/${id}`)
        return res;
    }


    static async createJob(username, formData) {
        await this.request(`jobs/${username}`, formData, "post")
    }

    static async getPetWalkSchedule(petId) {
        const res = await this.request(`jobs/pet/${petId}`)
        return res;
    }

    static async updatePetProfile(petId, username, formData) {
        const queryString = `?username=${JSON.stringify(username)}`;
        await this.request(`pets/${petId}${queryString}`, formData, "patch")
    }

    static async delete(petId, petName) {
        await this.request(`pets/${petId}/${petName}`, {}, "delete")
    }


    static async hireWalker(jobId, walkerId) {
        await this.request(`jobs/hire/jobId/${jobId}/walkerId/${walkerId}`, {}, "patch")
    }

    static async getHiredWalker(jobId) {
        const res = await this.request(`jobs/${jobId}/hiredWalker`)
        return res;
    }

    static async rejectWalker(jobId, walkerId) {
        await this.request(`jobs/reject/jobId/${jobId}/walkerId/${walkerId}`, {}, "patch")

    }

}



// static async getMultiPetsProfile(ids) {
//     const queryString = `?petIds=${JSON.stringify(ids)}`;
//     const res = await this.request(`pets/ids${queryString}`);
//     // const res = await this.request(`pets/ids`, ids)
//     return res
// }


export default Api