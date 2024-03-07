import { QueryClient } from "@tanstack/react-query";
import axios, { InternalAxiosRequestConfig } from "axios";

export const queryClient = new QueryClient();

const apiClient = axios.create({
    baseURL: "https://localhost:7297"
});

apiClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const token = JSON.parse(window.localStorage.getItem("lppToken") ?? "");

    if (config.headers) {
        config.headers["Authorization"] = `Bearer ${token.accessToken}`;
    }

    return config;
})

export function logIn(email: string, password: string) {
    return apiClient.post("/login", {
        email,
        password
    }).then(r => r.data);
}

export function getCurrentUser() {
    return apiClient.get("/currentUser").then(r => r.data);
}