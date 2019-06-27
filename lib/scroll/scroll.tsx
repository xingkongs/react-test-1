import React from "react";
import {scopedClassMaker} from "../helpers/classes";
import "./scroll.scss";
interface HTMLAttributes<HTMLDivElement> {
    style: { [key: string]: any }
}
interface Props extends HTMLAttributes<HTMLDivElement> {
}
const sc = scopedClassMaker("xrui-scroll");
const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...reset} = props;
    return (
        <div className={sc("")} {...reset}>
            <div className={sc("inner")}>
                {children}
            </div>
        </div>
    );
};
export default Scroll;