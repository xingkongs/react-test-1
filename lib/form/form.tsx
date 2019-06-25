import React from "react";
import {scopedClassMaker} from "../helpers/classes";
import "./form.scss";
import Input from "../input/input";
export interface formValue {
    [K: string]: any
}
interface Props {
    value: formValue,
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: Array<React.ReactElement>,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: formValue) => void,
    errors: { [K: string]: string[] },
    errorsDisplayMode?: "first" | "all"
}
const sc = scopedClassMaker("xrui-form");
const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value;
    const onChange = (name: string, value: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const newFormValue = {...formData, [name]: value};
        props.onChange(newFormValue);
        console.log(e.target.value);
    };
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    return (
        <div>
            {JSON.stringify(formData)}
            <form onSubmit={onSubmit} className={sc()}>
                <table className={sc("table")}>
                    <tbody>
                    {props.fields.map(t =>
                        <tr key={t.name} className={sc("tr", {extra: props.errors[t.name] && "error"})}>
                            <td className={sc("td")} key={t.name + "0"}>{t.label}</td>
                            <td className={sc("td")} key={t.name + "1"}>
                                <Input type={t.input.type} value={formData[t.name]} onChange={(e) => onChange(t.name, e.target.value, e)}/>
                            </td>
                            <td className={sc("td error")} key={t.name + "2"}>
                                {props.errors[t.name] ?
                                    props.errorsDisplayMode === "first" ?
                                        props.errors[t.name][0] :
                                        props.errors[t.name].join() : ""
                                }
                            </td>
                        </tr>
                    )}
                    <tr className={sc("tr")}>
                        <td className={sc("td")}/>
                        <td className={sc("td")}>
                            {props.buttons.map((button, index) =>
                                React.cloneElement(button, {key: index})
                            )}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};
Form.defaultProps = {
    errorsDisplayMode: "first"
};
export default Form;