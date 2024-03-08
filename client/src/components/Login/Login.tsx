import React from 'react';
import { useLogin } from '../../hooks/authentication-hooks';
import styled from 'styled-components';
import Button from '../Button';

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
                <img src="logo.png" />
            </header>
            <LoginForm onSubmit={handleSubmit}>
                <InputWrapper>
                    <label htmlFor="login-email">Email</label>
                    <input
                        type="text"
                        id="login-email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="login-password">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </InputWrapper>

                <Button>Submit!</Button>
            </LoginForm>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    width: fit-content;
    max-width: min(800px, 100% - 32px);
    height: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 40ch;
    max-width: 100%;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
        font-weight: bold;
    }
`;

export default Login;
