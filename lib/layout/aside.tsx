import React from "react";
import {scopedClassMaker} from "../helpers/scopedClass";
const sc = scopedClassMaker("xrui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Aside: React.FunctionComponent<Props> = (props) => {
    const {className, ...reset} = props;
    return (
        <div className={sc("aside", {extra: className})} {...reset}>aside</div>
    );
};
export default Aside;