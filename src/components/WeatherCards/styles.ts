import styled from "styled-components";
import { breakpoints } from "../../styles";

export const CardsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
    width: 100%;
    min-height: 350px;

    > div {
        flex: 1;
        padding: 0 5px;
    }

    @media (max-width: ${breakpoints.md}) {
        > div {
            flex: 0 0 100%;
        }
    }
`;
