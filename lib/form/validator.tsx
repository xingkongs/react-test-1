import {formValue} from "./form";
interface FormRule {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number
    pattern?: RegExp;
    validator?: {
        name: string,
        validate: (value: string) => Promise<void>
    }
}
type FormRules = Array<FormRule>
const isEmpty = (value: any) => {
    return value === undefined || value === null || value === "";
};
const Validator = (formValue: formValue, rules: FormRules, callback: (errors: any) => void): void => {
    const errors: any = {};
    const addErrors = (key: string, message: string | Promise<void>) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    rules.map(rule => {
        const value = formValue[rule.key];
        if (rule.validator) {
            const promise = rule.validator.validate(value);
            addErrors(rule.key, promise);
        }
        if (rule.required && isEmpty(value)) {
            addErrors(rule.key, "必填");
        }
        if (rule.minLength && value.length < rule.minLength) {
            addErrors(rule.key, "太短");
        }
        if (rule.maxLength && value.length > rule.maxLength) {
            addErrors(rule.key, "太长");
        }
        if (rule.pattern && !isEmpty(value) && !(rule.pattern.test(value))) {
            addErrors(rule.key, "格式不匹配");
        }
    });
    Promise.all(flat(Object.values(errors)))
        .then(() => {
            callback(errors);
            console.log("所有promise都成功了！");
        }, () => {
            callback(errors);
            console.log("某一个promise失败了！");
        });
};
export default Validator;
function flat(array: Array<any>) {
    const result: any = [];
    array.map((item: any) => {
        if (item instanceof Array) {
            result.push(...item);
        } else {
            result.push(item);
        }
    });
    return result;
}