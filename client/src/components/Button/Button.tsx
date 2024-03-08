import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
    return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
    background-color: var(--color-primary);
    border: 0;
    border-radius: 9999px;
    font-weight: bold;
    padding: 8px;
`;

export default Button;
