import React from "react";
import {scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker("xrui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Content: React.FunctionComponent<Props> = (props) => {
    const {className, ...reset} = props;
    return (
        <div className={sc("content", {extra: className})} {...reset}>{props.children}</div>
    );
};
export default Content;