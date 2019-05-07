import React from "react";
import Button from "./button";
const fn = () => {
    console.log(1);
};
export default () => {
    return (
        <div>
            <div>
                <h3>例1</h3>
                <Button onMouseEnter={fn}/>
            </div>
            <div>
                <h3>例2</h3>
                <Button value="button" onClick={fn}/>
            </div>
        </div>
    );
};
