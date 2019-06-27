import React from "react";
import Middleware from "../middleware";
import ScrollExample from "./scroll.example";
const ScrollDemo: React.FunctionComponent = () => {
    return (
        <Middleware code={require("!!raw-loader!./scroll.example.tsx").default}>
            <ScrollExample/>
        </Middleware>
    );
};
export default ScrollDemo;