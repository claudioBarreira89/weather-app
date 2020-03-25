import React from "react";
import { Provider } from "./context";
import WeatherComponent from "./components/WeatherComponent";
import withStyles from "./hocs/withStyles";

const App = () => (
    <Provider>
        <WeatherComponent />
    </Provider>
);

export default withStyles(App);
