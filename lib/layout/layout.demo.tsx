import React from "react";
import Middleware from "../middleware";
import LayoutExample from "./layout.example";
const LayoutDemo: React.FunctionComponent = () => {
    return (
        <Middleware code={require("!!raw-loader!./layout.example.tsx").default}>
            <LayoutExample/>
        </Middleware>
    );
};
export default LayoutDemo;