import React, { useReducer } from "react";
import { ActionTypes } from "./types";
import Context from "./";

const Provider: React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        const { payload } = action;

        switch (action.type) {
            case ActionTypes.UPDATE_INPUT: {
                return {
                    ...state,
                    inputValue: payload,
                    weatherData: payload ? state.weatherData : null
                };
            }
            case ActionTypes.SET_WEATHER: {
                if (payload.consolidated_weather) {
                    payload.consolidated_weather.pop();
                }

                return {
                    ...state,
                    weatherData: payload.consolidated_weather
                };
            }
            case ActionTypes.SET_LOADING: {
                return {
                    ...state,
                    isLoading: payload
                };
            }
            default: {
                return state;
            }
        }
    }, []);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
