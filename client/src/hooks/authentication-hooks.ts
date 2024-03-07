import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, logIn } from "../helpers/api-helpers";

type LoginInformation = {
    email: string,
    password: string
};

export function useLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (info: LoginInformation) => logIn(info.email, info.password),
        onSuccess: (data) => {
            window.localStorage.setItem("lppToken", JSON.stringify(data));
            if (data) queryClient.invalidateQueries({ queryKey: ["current"] });
        }
    });
}

export function useCurrentUser() {
    return useQuery({ queryKey: ["current"], queryFn: getCurrentUser, retry: 0, refetchOnWindowFocus: false });
}