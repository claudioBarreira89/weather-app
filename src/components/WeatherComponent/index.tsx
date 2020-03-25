import React from "react";
import { Wrapper } from "./styles";
import CitySelector from "../CitySelector";
import WeatherCards from "../WeatherCards";

const WeatherComponent: React.FunctionComponent = () => {
    return (
        <Wrapper>
            <CitySelector />
            <WeatherCards />
        </Wrapper>
    );
};

export default WeatherComponent;
