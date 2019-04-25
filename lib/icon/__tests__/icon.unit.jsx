import {mount} from 'enzyme'
import renderer from "react-test-renderer";
import React from "react";
import Icon from "../icon";
describe("Icon", function () {
    it("xxx", () => {
        const json = renderer.create(<Icon name="alipay"/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it("监听onClick事件", function () {
        let fn = jest.fn()
        let fn2 = jest.fn()
        const component = mount(<Icon name="alipay" onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
        expect(fn2).not.toBeCalled()
    });
});