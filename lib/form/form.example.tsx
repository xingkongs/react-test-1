import React, {useState} from "react";
import Form, {formValue} from "./form";
import Validator from "./validator";
import Button from "../button/button";
const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<formValue>({
        name: "xingkongs",
        password: ""
    });
    const [fields] = useState([
        {name: "name", label: "用户名", input: {type: "text"}},
        {name: "password", label: "密码", input: {type: "password"}}
    ]);
    const [errors, setErrors] = useState({});
    const onSubmit = () => {
        const rules = [
            {key: "name", required: true},
            {key: "name", minLength: 8, maxLength: 16},
            {key: "name", pattern: /^[A-Za-z0-9]+$/},
            {key: "password", required: true},
        ];
        const errors = Validator(formData, rules);
        setErrors(errors);
    };
    const onChange = (newValue: formValue) => {
        setFormData(newValue);
    };
    return (
        <div>
            {JSON.stringify(errors)}
            <Form value={formData} fields={fields} buttons={[
                <Button type="submit" value="ok"/>,
                <Button type="reset" value="cancel"/>
            ]} errors={errors} onSubmit={onSubmit} onChange={onChange} />
        </div>
    );
};
export default FormExample;