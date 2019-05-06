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
const scopedClassMaker = (prefix: string) =>
    (name?: string | classToggles, options?: Options) =>
        Object
            .entries(typeof name === "object" ? name : {[name === undefined ? "" : name]: true})
            .filter(km => km[1] !== false)
            .map(k => k[0])
            .map((name) => [prefix, name]
                .filter(Boolean)
                .join("-"))
            .concat(options && options.extra || [])
            .join(" ");
export {scopedClassMaker};