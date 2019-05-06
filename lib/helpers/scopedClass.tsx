interface Options {
    extra: string | undefined
}
function scopedClassMaker(prefix: string) {
    return function (name?: string, options?: Options) {
        const result = [prefix, name].filter(Boolean).join("-");
        if (options && options.extra) {
            return [result, options.extra].join(" ");
        } else {
            return result;
        }
    };
}
export {scopedClassMaker};