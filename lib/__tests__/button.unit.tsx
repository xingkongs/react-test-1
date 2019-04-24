import * as renderer from 'react-test-renderer'
import * as React from "react"
import Button from "../button";
describe("button", function () {
    it("是一个div",()=>{
        const json = renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    })
});