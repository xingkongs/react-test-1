import classes from "../classes";
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
        const result = classes("a", undefined,false,null,"你好");
        expect(result).toEqual("a 你好");
    });
    it("无参数", function () {
        const result = classes();
        expect(result).toEqual("");
    });
});