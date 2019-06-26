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
interface oneError {
    message: string,
    promise?: Promise<any>
}
type FormRules = Array<FormRule>
const isEmpty = (value: any) => {
    return value === undefined || value === null || value === "";
};
const Validator = (formValue: formValue, rules: FormRules, callback: (errors: any) => void): void => {
    const errors: any = {};
    const addErrors = (key: string, error: oneError) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(error);
    };
    rules.map(rule => {
        const value = formValue[rule.key];
        if (rule.validator) {
            const promise = rule.validator.validate(value);
            addErrors(rule.key, {message: rule.validator.name, promise});
        }
        if (rule.required && isEmpty(value)) {
            addErrors(rule.key, {message: "必填"});
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addErrors(rule.key, {message: "太短"});
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addErrors(rule.key, {message: "太长"});
        }
        if (rule.pattern && !isEmpty(value) && !(rule.pattern.test(value))) {
            addErrors(rule.key, {message: "格式不匹配"});
        }
    });
    Promise.all(
        flat(Object.values(errors))
            .filter((item: any) => item.promise)
            .map((item: any) => item.promise)
    ).finally(() => {
        callback(fromEntries(Object.keys(errors)
            .map<[string, string[]]>(key =>
                [key, errors[key].map((item: oneError) => item.message)]
            )));
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
function fromEntries(array: Array<[string, string[]]>) {
    const result: { [key: string]: string[] } = {};
    array.map((item) =>
        result[item[0]] = item[1]
    );
    return result;
}