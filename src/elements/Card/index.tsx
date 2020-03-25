import React from "react";
import { StyledCard, Title, MainValue, AltValues, ExtraValues } from "./styles";

interface ICard {
    title?: string;
    img?: string;
    value?: string;
    minValue?: IData;
    maxValue?: IData;
    alt1?: IData;
    alt2?: IData;
}

interface IData {
    label: string;
    value: string;
}

const Card: React.FunctionComponent<ICard> = ({
    title,
    img,
    value,
    minValue,
    maxValue,
    alt1,
    alt2
}) => {
    return (
        <StyledCard>
            <Title>{title}</Title>
            <img src={img} />
            <MainValue>{value}</MainValue>
            <AltValues>
                {minValue && (
                    <div>
                        <span>{minValue.label}</span>
                        <h3>{minValue.value}</h3>
                    </div>
                )}
                {maxValue && (
                    <div>
                        <span>{maxValue.label}</span>
                        <h3>{maxValue.value}</h3>
                    </div>
                )}
            </AltValues>

            <ExtraValues>
                {alt1 && (
                    <div>
                        <span>{alt1.label}</span>
                        <h3>{alt1.value}</h3>
                    </div>
                )}
                {alt2 && (
                    <div>
                        <span>{alt2.label}</span>
                        <h3>{alt2.value}</h3>
                    </div>
                )}
            </ExtraValues>
        </StyledCard>
    );
};

export default Card;
