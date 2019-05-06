import React from "react";
import {scopedClassMaker} from "../helpers/scopedClass";
const sc = scopedClassMaker("xrui-layout");
const Aside: React.FunctionComponent = () => {
    return (
        <div className={sc("aside")}>aside</div>
    );
};
export default Aside;