import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "../components/Form";

Enzyme.configure({ adapter: new Adapter() });

global.scrollTo = jest.fn();

jest.mock("react-redux", () => {
    const { Provider, useSelector } = jest.requireActual("react-redux");

    return {
        useDispatch: jest.fn(),
        useSelector: jest.fn(),
        Provider: jest.fn(),
    };
});

describe("Form", () => {
    it("change select status", () => {
        const props = {
            setStatus: jest.fn(),
        };
        const wrapper = mount(<Form {...props} />);
        wrapper
            .find("select")
            .simulate("change", { target: { value: "today" } });
        expect(props.setStatus).toHaveBeenCalledWith("today");
    });
});
