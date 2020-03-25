import React, { useContext } from "react";
import { IAppContexnt } from "./types";

const initialState: IAppContexnt = {
    state: {
        inputValue: "",
        weatherData: null,
        isLoading: false
    }
};

const Context = React.createContext(initialState);

export const appContext = () => useContext(Context);

export { default as Provider } from "./provider";
export default Context;
