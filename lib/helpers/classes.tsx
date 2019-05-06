function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(" ");
}
export default classes;
interface Options {
    extra: string | undefined
}
interface classToggles {
    [k: string]: boolean
}
function scopedClassMaker(prefix: string) {
    return function (name?: string | classToggles, options?: Options) {
        let name2, result;
        if (typeof name === "string" || name === undefined) {
            result = [prefix, name].filter(Boolean).join("-");
        } else {
            name2 = Object.entries(name).filter(km => km[1]).map(k => k[0]);
            result = name2.map((n) => {
                return [prefix, n].filter(Boolean).join("-");
            }).join(" ");
        }
        if (options && options.extra) {
            return [result, options.extra].join(" ");
        } else {
            return result;
        }
    };
}
export {scopedClassMaker};