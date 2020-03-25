import React from "react";
import { Overlay } from "./styles";
import spinner from "../../assets/images/spinner.gif";

const Loader = () => {
    return (
        <Overlay>
            <img src={spinner} />
        </Overlay>
    );
};

export default Loader;
