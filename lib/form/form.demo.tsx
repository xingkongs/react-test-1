import React from "react";
import Middleware from "../middleware";
import FormExample from "./form.example";
const FormDemo: React.FunctionComponent = () => {
    return (
        <Middleware code={require("!!raw-loader!./form.example.tsx").default}>
            <FormExample/>
        </Middleware>
    );
};
export default FormDemo;