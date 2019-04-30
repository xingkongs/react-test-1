import renderer from "react-test-renderer";
import React from "react";
import Button from "../button";
describe("button", function () {
    it("是一个div", () => {
        const json = renderer.create(<Button value="button"/>).toJSON();
        expect(json).toMatchSnapshot();
    });
});