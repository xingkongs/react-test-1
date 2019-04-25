import Icon from "./icon/icon";
import ReactDOM from "react-dom";
import React from "react";
// @ts-ignore
const fn: React.MouseEventHandler<SVGElement> = (e) => {
    console.log(e.target);
};
ReactDOM.render(<div>
    <Icon name='wechat' onClick={fn} onMouseEnter={() => {console.log("enter");}} onMouseLeave={() => {console.log("leave");}}/>
    <Icon name='qq'/>
    <Icon name='alipay'/>
</div>, document.body.querySelector("#root"));