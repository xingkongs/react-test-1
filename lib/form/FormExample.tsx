import React, {useState} from "react";
import Form, {formValue} from "./form";
const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<formValue>({
        name: "xingkongs",
        password: ""
    });
    const [fields] = useState([
        {name: "name", label: "用户名", input: {type: "text"}},
        {name: "password", label: "密码", input: {type: "password"}}
    ]);
    const onSubmit = (e: React.FormEvent) => {
        console.log(formData,e);
    };
    const onChange = (newValue: formValue) => {
        setFormData(newValue);
    };
    return (
        <Form value={formData} fields={fields}
            buttons={[
                <button type="submit">ok</button>,
                <button type="reset">cancel</button>
            ]}
            onSubmit={onSubmit}
            onChange={onChange}
        />
    );
};
export default FormExample;