import Input from "./input";
import React, {useState} from "react";
const InputExample = () => {
    const [value, setValue] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return (
        <Input type="text" value={value} onChange={onChange}/>
    );
};
export default InputExample;