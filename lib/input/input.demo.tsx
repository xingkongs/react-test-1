import Middleware from "../middleware";
import React from "react";
import InputExample from "./input.example";
export default () => {
    return (
        <Middleware code={require("!!raw-loader!./input.example.tsx").default}>
            <div>
                <InputExample/>
            </div>
        </Middleware>
    );
}