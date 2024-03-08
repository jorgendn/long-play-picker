import React from 'react';
import { useLogin } from '../../hooks/authentication-hooks';
import styled from 'styled-components';

function Login() {
    const loginQuery = useLogin();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        loginQuery.mutate({ email, password });
    }

    return (
        <Wrapper>
            <header>
                <Logo src="logo.png" />
            </header>
            <LoginForm onSubmit={handleSubmit}>
                <label htmlFor="login-email">Email:</label>
                <input
                    type="text"
                    id="login-email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <label htmlFor="login-password">Password:</label>
                <input
                    type="password"
                    id="login-password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />

                <button>Submit!</button>
            </LoginForm>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    width: fit-content;
    max-width: 800px;
    height: fit-content;
    margin: auto;
`;

const Logo = styled.img`
    display: block;
    width: 100%;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export default Login;
