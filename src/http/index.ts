import axios from "axios"

export const $api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // withCredentials: true
})

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})