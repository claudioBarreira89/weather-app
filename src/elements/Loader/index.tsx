import React from "react";
import { Overlay } from "./styles";
import spinner from "../../assets/images/spinner.gif";

const Loader: React.FunctionComponent = () => {
    return (
        <Overlay>
            <img src={spinner} />
        </Overlay>
    );
};

export default Loader;
