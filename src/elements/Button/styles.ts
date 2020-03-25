import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

interface IStyledButton {
    selected?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
    width: 100%;
    max-width: 250px;
    border: 2px solid ${colors.neutral.dark};
    color: ${colors.neutral.dark};
    background-color: ${colors.background.light};
    border-radius: 20px;
    padding: 15px;
    font-size: 21px;
    cursor: pointer;

    transition: 0.3s;

    :hover {
        ${({ selected }) =>
            !selected && `background-color: ${colors.background.lightGrey};`}
    }

    ${({ selected }) =>
        selected &&
        `
            background-color: ${colors.background.dark};
            color: ${colors.background.light};
            `}
    
    @media (max-width: ${breakpoints.md}) {
        padding: 10px;
        font-size: 16px;
        border-radius: 15px;
    } 
`;
