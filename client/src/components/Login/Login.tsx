import React from "react";
import { useLogin } from "../../hooks/authentication-hooks";

function Login() {
    const loginQuery = useLogin();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        loginQuery.mutate({ email: "jorgendt@gmail.com", password: "P4ssw0rd1!" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="password" id="login-password" />
            <button>Submit!</button>
        </form>
    );
}

export default Login;