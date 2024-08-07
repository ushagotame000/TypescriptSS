import axios, { AxiosInstance } from "axios";
import { baseURL } from "./config";

export const api:AxiosInstance = axios.create({
    baseURL: baseURL,
})

