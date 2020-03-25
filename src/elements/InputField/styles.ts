import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

export const StyledInputField = styled.input`
    width: 100%;
    font-size: 35px;
    font-weight: 300;
    border: 0;
    padding: 10px;
    border-bottom: 2px solid ${colors.neutral.grey};
    margin-bottom: 45px;

    @media (max-width: ${breakpoints.md}) {
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }
`;
