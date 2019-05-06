import classes, {scopedClassMaker} from "../classes";
describe("classes", function () {
    it("should 接收1个参数", function () {
        const result = classes("a");
        expect(result).toEqual("a");
    });
    it("接收2个参数", function () {
        const result = classes("a", "b");
        expect(result).toEqual("a b");
    });
    it("接收undefined", function () {
        const result = classes("a", undefined);
        expect(result).toEqual("a");
    });
    it("接收各种奇怪参数", function () {
        const result = classes("a", undefined, false, null, "你好");
        expect(result).toEqual("a 你好");
    });
    it("无参数", function () {
        const result = classes();
        expect(result).toEqual("");
    });
});
describe("scopedClassMaker", () => {
    it("接受字符串或对象参数", () => {
        const sc = scopedClassMaker("xrui-layout");
        expect(sc()).toEqual("xrui-layout");
        expect(sc("header")).toEqual("xrui-layout-header");
        expect(sc({y: true, z: false})).toEqual("xrui-layout-y");
        expect(sc({y: true, z: true})).toEqual("xrui-layout-y xrui-layout-z");
        expect(sc({y: true, z: true}, {extra: "blue"})).toEqual("xrui-layout-y xrui-layout-z blue");
    });
});