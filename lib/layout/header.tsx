import React from "react";
import {scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker("xrui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...reset} = props;
    return (
        <div className={sc("header", {extra: className})} {...reset}>{props.children}</div>
    );
};
export default Header;