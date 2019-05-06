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
        const objNames = (typeof name === "string" || name === undefined) ?
            {[name === undefined ? "" : name]: true} :
            name;
        const scoped = Object
            .entries(objNames)
            .filter(km => km[1] !== false)
            .map(k => k[0])
            .map((name) => [prefix, name]
                .filter(Boolean)
                .join("-"))
            .join(" ");
        if (options && options.extra) {
            return [scoped, options.extra].join(" ");
        } else {
            return scoped;
        }
    };
}
export {scopedClassMaker};