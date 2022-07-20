import axios from "axios";

const BASE_URL = "http://localhost:500/api/v1"
const TOKEN = ""

export const publicRequest = axios.create({
    baseUrl: BASE_URL,
})

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})