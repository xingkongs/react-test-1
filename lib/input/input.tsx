import React from "react";
import {scopedClassMaker} from "../helpers/classes";
import "./input.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const sc = scopedClassMaker("xrui-input");
const Input: React.FunctionComponent<Props> = (props) => {
    const {className, onChange, type, value, ...resetProps} = props;
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };
    return (
        <input className={sc("", {extra: className})} {...resetProps} value={value} onChange={(e) => onInputChange(e)}
               type={type}/>
    );
};
Input.defaultProps = {
    type: "text"
};
export default Input;