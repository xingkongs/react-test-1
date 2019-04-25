function classes(...names: (string | undefined)[]) {
    //判断返回真值
    const isTrue = (value:any) => value;
    return names.filter(isTrue).join(" ");
}
export default classes;