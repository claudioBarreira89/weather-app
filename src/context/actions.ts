import { getWeatherByCityId, getWeather } from "../services";
import { ActionTypes } from "./types";
import { Dispatch } from "react";

export const getWeatherWithValue = async (
    dispatch: Dispatch<any>,
    value: string
) => {
    dispatch({
        type: ActionTypes.SET_LOADING,
        payload: true
    });

    const data = await getWeatherByCityId(value);

    dispatch({
        type: ActionTypes.SET_WEATHER,
        payload: data
    });

    dispatch({
        type: ActionTypes.SET_LOADING,
        payload: false
    });
};

export const getWeatherWithId = async (dispatch: Dispatch<any>, id: number) => {
    dispatch({
        type: ActionTypes.SET_LOADING,
        payload: true
    });

    const data = await getWeather(id);

    dispatch({
        type: ActionTypes.SET_WEATHER,
        payload: data
    });

    dispatch({
        type: ActionTypes.SET_LOADING,
        payload: false
    });
};

export const updateInput = (dispatch: Dispatch<any>, value: string) =>
    dispatch({
        type: ActionTypes.UPDATE_INPUT,
        payload: value
    });
