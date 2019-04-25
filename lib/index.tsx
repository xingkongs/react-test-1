import Icon from "./icon";
import ReactDOM from "react-dom";
import React from "react";
// @ts-ignore
const fn = ()=>{
    console.log("fn");
}
ReactDOM.render(<div>
    <Icon name='wechat' onClick={fn}/>
</div>, document.body.querySelector("#root"));