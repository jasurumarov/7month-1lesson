import axios from "axios";

const mainURL = axios.create({
    baseURL: "https://66361b4c415f4e1a5e264945.mockapi.io/api"
})

export default mainURL