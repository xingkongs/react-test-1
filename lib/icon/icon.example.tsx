import React from "react";
import Icon from "./icon";
const fn: React.MouseEventHandler<SVGElement> = (e) => {
    console.log(e.target);
};
const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <Icon name='wechat' onClick={fn} onMouseEnter={() => {console.log("enter");}} onMouseLeave={() => {console.log("leave");}}/>
            <Icon name='qq'/>
            <Icon name='alipay'/>
        </div>
    );
};
export default IconExample
