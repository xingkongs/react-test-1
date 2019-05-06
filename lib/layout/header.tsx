import React from "react";
import {scopedClassMaker} from "../helpers/scopedClass";
const sc = scopedClassMaker("xrui-layout");
const Header: React.FunctionComponent = () => {
    return (
        <div className={sc("header")}>header</div>
    );
};
export default Header;