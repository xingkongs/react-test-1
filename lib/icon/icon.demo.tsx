import React from "react";
import Middleware from "../middleware";
import IconExample from "./icon.example";
const x = require("!!raw-loader!./icon.example.tsx");
const IconDemo: React.FunctionComponent = () => {
    return (
        <Middleware code={x.default}>
            <IconExample/>
        </Middleware>
    );
};
export default IconDemo;