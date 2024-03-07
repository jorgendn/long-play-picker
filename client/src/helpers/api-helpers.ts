import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

const apiClient = axios.create({
    baseURL: "https://localhost:7297"
});

export function getCurrentUser() {
    return apiClient.get("/currentUser").then(r => r.data);
}