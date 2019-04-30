import React from "react";
import Button from "./button";
const fn = () => {
    console.log(1);
};
const ButtonExample: React.FunctionComponent = () => {
    return (
        <Button onMouseEnter={fn}/>
    );
};
export default ButtonExample;