import React from "react";
import {scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker("xrui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Footer: React.FunctionComponent<Props> = (props) => {
    const {className, ...reset} = props;
    return (
        <div className={sc("footer", {extra: className})} {...reset}>footer</div>
    );
};
export default Footer;