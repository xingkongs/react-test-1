import React from "react";
import Middleware from "../middleware";
import DialogExample from "./dialog.example";
const DialogDemo: React.FunctionComponent = () => {
    return (
        <Middleware code={require("!!raw-loader!./dialog.example.tsx").default}>
            <DialogExample/>
        </Middleware>
    );
};
export default DialogDemo;