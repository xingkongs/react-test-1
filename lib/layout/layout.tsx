import React from "react";
import "./layout.scss";
import {scopedClassMaker} from "../helpers/scopedClass";
const sc = scopedClassMaker("xrui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...reset} = props;
    return (
        <div className={[sc(), className].join(" ")} {...reset}>
            {props.children}
        </div>
    );
};
export default Layout;