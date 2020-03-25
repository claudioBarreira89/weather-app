import React from "react";
import { StyledInputField } from "./styles";

interface IInputField {
    placeholder?: string;
    value?: string;
    handleChange?: (e) => void;
}

const InputField: React.FunctionComponent<IInputField> = ({
    placeholder,
    value,
    handleChange
}) => {
    return (
        <StyledInputField
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    );
};

export default InputField;
