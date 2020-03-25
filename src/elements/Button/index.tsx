import React from "react";
import { StyledButton } from "./styles";

interface IInputField {
    text?: string;
    id?: number;
    selected?: boolean;
    handleClick?: (id: number, text: string) => void;
}

const Button: React.FunctionComponent<IInputField> = ({
    text,
    id,
    handleClick,
    selected = false
}) => {
    return (
        <StyledButton
            onClick={() => handleClick && handleClick(id, text)}
            selected={selected}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
