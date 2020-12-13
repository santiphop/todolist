import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../components/TodoList";

Enzyme.configure({ adapter: new Adapter() });

global.scrollTo = jest.fn();

jest.mock("react-redux", () => {
    const { Provider, useSelector } = jest.requireActual("react-redux");

    return {
        useDispatch: jest.fn(),
        useSelector: jest.fn().mockReturnValue([]),
        Provider: jest.fn(),
    };
});

describe("TodoList", () => {
    it("display status", () => {
        const props = {
            status: "all",
        };

        const wrapper = shallow(<TodoList {...props} />);
        expect(wrapper.find("h1").text()).toBe("all");
    });
});
