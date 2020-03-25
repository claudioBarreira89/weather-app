import React from "react";
import { appContext } from "../../context";
import { CardsWrapper } from "./styles";
import literals from "../../literals";
import Card from "../../elements/Card";
import Loader from "../../elements/Loader";

const WeatherCards: React.FunctionComponent = () => {
    const { state } = appContext();
    const { weatherData, inputValue, isLoading } = state;

    return (
        <CardsWrapper>
            {isLoading && <Loader />}
            {weatherData &&
                inputValue &&
                weatherData.map((weather: any, i) => {
                    const date = new Date();
                    const weekDayIndex =
                        date.getDay() + i > 6
                            ? date.getDay() + i - 6
                            : date.getDay() + i;

                    return (
                        <div key={i}>
                            <Card
                                title={
                                    literals.weatherCards.weekDays[weekDayIndex]
                                }
                                img={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
                                value={`${Math.ceil(weather.the_temp)}º`}
                                minValue={{
                                    label: literals.weatherCards.min,
                                    value: `${Math.ceil(weather.min_temp)}º`
                                }}
                                maxValue={{
                                    label: literals.weatherCards.max,
                                    value: `${Math.ceil(weather.max_temp)}º`
                                }}
                                alt1={{
                                    label: literals.weatherCards.windSpeed,
                                    value: `${Math.ceil(weather.wind_speed)}`
                                }}
                                alt2={{
                                    label: literals.weatherCards.windDir,
                                    value: weather.wind_direction_compass
                                }}
                            />
                        </div>
                    );
                })}
        </CardsWrapper>
    );
};

export default WeatherCards;
