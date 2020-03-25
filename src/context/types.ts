import { Dispatch } from "react";

export enum ActionTypes {
    UPDATE_INPUT = "UPDATE_INPUT",
    SET_WEATHER = "SET_WEATHER",
    SET_LOADING = "SET_LOADING"
}

export interface IState {
    inputValue: string;
    weatherData: [];
    isLoading: boolean;
}

export interface IAppContexnt {
    dispatch?: Dispatch<any>;
    state: IState;
}
