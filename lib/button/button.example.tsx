import React from "react";
import Button from "./button";
import Icon from "../icon/icon";
const fn = () => {
    console.log(1);
};
export default () => {
    return (
        <div>
            <div className="box">
                <h3>例1</h3>
                <Button onMouseEnter={fn}/>
            </div>
            <div className="box">
                <h3>例2</h3>
                <Button value="button" onClick={fn}/>
            </div>
            <div className="box">
                <h3>例3</h3>
                <Button value="button" onClick={fn}>
                    <Icon name="alipay"/>
                </Button>
            </div>
        </div>
    );
};
