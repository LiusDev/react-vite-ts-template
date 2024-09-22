import axios from "axios"

const BASE_URL = "https://auth.jsclub.dev"

export const instance = axios.create({
    baseURL: BASE_URL,
})
