import React from "react";
import {scopedClassMaker} from "../helpers/scopedClass";
const sc = scopedClassMaker("xrui-layout");
const Footer: React.FunctionComponent = () => {
    return (
        <div className={sc("footer")}>footer</div>
    );
};
export default Footer;