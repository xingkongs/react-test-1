import {formValue} from "./form";
interface FormRule {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number
    pattern?: RegExp;
    validator?: (value: string) => Promise<string>
}
type oneError = string | Promise<string>
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
            const promise = rule.validator(value);
            addErrors(rule.key, promise);
        }
        if (rule.required && isEmpty(value)) {
            addErrors(rule.key, "required");
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addErrors(rule.key, "minLength");
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addErrors(rule.key, "maxLength");
        }
        if (rule.pattern && !isEmpty(value) && !(rule.pattern.test(value))) {
            addErrors(rule.key, "pattern");
        }
    });
    const flattenErrors = flat(Object.keys(errors).map(key =>
        errors[key].map((promise: oneError) => [key, promise])
    ));
    const newPromises = flattenErrors.map(([key, promiseOrString]) =>
        (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
            .then(() => [key, undefined], (reason) => [key, reason]));
    Promise.all(newPromises).then(results => {
        callback(zip(results.filter(item => item[1])));
    });
};
export default Validator;
function zip(array: Array<any>) {
    const result: any = {};
    array.map(([key, value]) => {
        result[key] = result[key] || [];
        result[key].push(value);
    });
    return result;
}
function flat(array: Array<any>) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            result.push(...array[i]);
        } else {
            result.push(array[i]);
        }
    }
    return result;
}
// function fromEntries(array: Array<[string, string[]]>) {
//     const result: { [key: string]: string[] } = {};
//     array.map((item) =>
//         result[item[0]] = item[1]
//     );
//     return result;
// }