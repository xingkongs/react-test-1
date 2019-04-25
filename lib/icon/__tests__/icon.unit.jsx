import renderer from "react-test-renderer";
import React from "react";
import Icon from "../icon";
describe("Icon", function () {
    it("xxx", () => {
        const json = renderer.create(<Icon name="alipay"/>).toJSON();
        expect(json).toMatchSnapshot();
    });
});