import {formValue} from "./form";
interface FormRule {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number
    pattern?: RegExp;
}
type FormRules = Array<FormRule>
interface FormErrors {
    [K: string]: string
}
const isEmpty = (value: any) => {
    return value === undefined || value === null || value === "";
};
const Validator = (formValue: formValue, rules: FormRules): FormErrors => {
    const errors: any = {};
    const addErrors = (key: string, message: string) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    rules.map(rule => {
        const value = formValue[rule.key];
        if (rule.required && isEmpty(value)) {
            addErrors(rule.key, "必填");
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addErrors(rule.key, "太短");
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addErrors(rule.key, "太长");
        }
        if (rule.pattern && !isEmpty(value) && !(rule.pattern.test(value))) {
            addErrors(rule.key, "格式不匹配");
        }
    });
    return errors;
};
export default Validator;