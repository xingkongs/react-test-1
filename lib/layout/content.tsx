import React from "react";
import {scopedClassMaker} from "../helpers/scopedClass";
const sc = scopedClassMaker("xrui-layout");
const Content: React.FunctionComponent = () => {
    return (
        <div className={sc("content")}>content</div>
    );
};
export default Content;