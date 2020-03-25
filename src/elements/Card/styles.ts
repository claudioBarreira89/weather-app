import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

export const StyledCard = styled.div`
    border: 1px solid ${colors.background.dark};
    padding: 15px 8px;
    margin-bottom: 10px;
    text-align: center;

    img {
        margin: 0 auto 15px;
        height: 70px;
    }

    @media (max-width: ${breakpoints.md}) {
        display: flex;
        align-items: center;

        img {
            flex: 1;
            margin: 0;
            height: 35px;
        }
    }
`;

export const Title = styled.div`
    text-align: center;
    margin-bottom: 15px;
    font-size: 18px;

    @media (max-width: ${breakpoints.md}) {
        margin-bottom: 0;
        flex: 1;
        font-size: 14px;
    }
`;

export const MainValue = styled.div`
    font-weight: 500;
    font-size: 42px;
    text-align: center;
    margin-bottom: 15px;

    @media (max-width: ${breakpoints.md}) {
        flex: 1;
        margin-bottom: 0;
        font-size: 25px;
    }
`;

export const AltValues = styled.div`
    display: flex;
    margin-bottom: 15px;

    > div {
        flex: 1;
        text-align: center;
        font-size: 14px;
        font-weight: 300;
    }

    h3 {
        margin: 5px 0 0;
        font-weight: 300;
        font-size: 22px;
    }

    @media (max-width: ${breakpoints.md}) {
        flex: 1;
        font-size: 12px;
        margin-bottom: 0;

        h3 {
            font-size: 16px;
        }
    }
`;

export const ExtraValues = styled(AltValues)`
    @media (max-width: ${breakpoints.md}) {
        display: none;
    }
`;
