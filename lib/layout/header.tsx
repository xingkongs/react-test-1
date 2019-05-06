import React from "react";
import {scopedClassMaker} from "../helpers/scopedClass";
const sc = scopedClassMaker("xrui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...reset} = props;
    return (
        <div className={sc("header", {extra: className})} {...reset}>header</div>
    );
};
export default Header;