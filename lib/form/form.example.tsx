import React, {useState} from "react";
import Form, {formValue} from "./form";
import Validator from "./validator";
import Button from "../button/button";
const userNames = ["frank", "xingkongs", "bob", "alice"];
const checkUserName = (name: string, succeed: () => void, fail: () => void) => {
    setTimeout(() => {
        if (userNames.indexOf(name) >= 0) {
            succeed();
        } else {
            fail();
        }
    }, 3000);
};
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
            {
                key: "name", validator: {
                    name: "unique",
                    validate(name: string) {
                        return new Promise<void>((resolve, reject) => {
                            checkUserName(name, resolve, reject);
                        });
                    }
                }
            },
            {key: "password", required: true},
        ];
        Validator(formData, rules, (errors) => {
            setErrors(errors);
        });
    };
    const onChange = (newValue: formValue) => {
        setFormData(newValue);
    };
    const transformError = (message: string) => {
        const map: any = {
            unique: "用户名已存在"
        };
        return map[message];
    };
    return (
        <div>
            <Form value={formData} fields={fields} buttons={[
                <Button type="submit" value="ok"/>,
                <Button type="reset" value="cancel"/>
            ]} errors={errors} onSubmit={onSubmit} onChange={onChange} transformError={transformError}/>
        </div>
    );
};
export default FormExample;