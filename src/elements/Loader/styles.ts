import styled from "styled-components";
import { colors } from "../../styles";

export const Overlay = styled.div`
    background-color: ${colors.overlay.white};
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    align-items: center;

    img {
        max-width: 80px;
        margin: auto;
    }
`;
