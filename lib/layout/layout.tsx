import React from "react";
import "./layout.scss";
import Aside from "./aside";
import {scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker("xrui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {
    children: Array<React.ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...reset} = props;
    const hasAside = props.children.some((node) => {
        return node.type === Aside;
    }, false);
    return (
        <div className={sc("", {extra: [className, hasAside && "xrui-hasAside"].join(" ")})} {...reset}>
            {props.children}
        </div>
    );
};
export default Layout;