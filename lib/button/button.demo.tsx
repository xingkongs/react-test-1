import React from "react";
import Middleware from "../middleware";
import ButtonExample from "./button.example";
const ButtonDemo: React.FunctionComponent = () => {
    return (
        <Middleware code={require("!!raw-loader!./button.example.tsx").default}>
            <ButtonExample/>
        </Middleware>
    );
};
export default ButtonDemo;