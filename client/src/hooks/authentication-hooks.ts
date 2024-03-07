import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../helpers/api-helpers";

export function useCurrentUser() {
    return useQuery({ queryKey: ["current"], queryFn: getCurrentUser, retry: 0, refetchOnWindowFocus: false });
}