import React from "react";
export interface formValue {
    [K: string]: any
}
interface Props {
    value: formValue,
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: Array<React.ReactElement>,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: formValue) => void
}
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
            <form onSubmit={onSubmit}>
                {props.fields.map(t =>
                    <div key={t.name}>
                        {t.label}
                        <input type={t.input.type} value={formData[t.name]}
                            onChange={(e) => onChange(t.name, e.target.value, e)}/>
                    </div>
                )}
                <div>
                    {props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index})
                    )}
                </div>
            </form>
        </div>
    );
};
export default Form;