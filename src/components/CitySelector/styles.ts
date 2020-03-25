import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Wrapper = styled.div`
    max-width: 80%;
    margin: 0 auto 80px;

    @media (max-width: ${breakpoints.md}) {
        margin: 0 auto 30px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    margin: 0 -10px;
    flex-wrap: wrap;

    > div {
        flex: 1;
        padding: 0 8px;
        text-align: center;
        margin-bottom: 15px;
    }

    @media (max-width: ${breakpoints.md}) {
        > div {
            flex: 0 0 50%;
            margin-bottom: 8px;
        }
    }

    @media (max-width: ${breakpoints.sm}) {
        > div {
            flex: 0 0 100%;
        }
    }
`;
