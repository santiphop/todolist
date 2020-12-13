import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todo from "../components/Todo";

Enzyme.configure({ adapter: new Adapter() });

global.scrollTo = jest.fn();

jest.mock("react-redux", () => {
    const { Provider, useSelector } = jest.requireActual("react-redux");

    return {
        useDispatch: jest.fn(),
        // we ensure that these are original
        useSelector,
        Provider,
    };
});

describe("Todo", () => {
    it("completed false", () => {
        const props = {
            post: { completed: false },
        };
        const wrapper = shallow(<Todo {...props} />);
        expect(wrapper.find(".todo-item.completed-line")).toHaveLength(0);
    });

    it("completed true", () => {
        const props = {
            post: { completed: true },
        };
        const wrapper = shallow(<Todo {...props} />);
        expect(wrapper.find(".todo-item.completed-line")).toHaveLength(1);
    });

    it("uncompleted - check icon available", () => {
        const props = {
            post: { completed: false },
        };
        const wrapper = shallow(<Todo {...props} />);
        expect(wrapper.find(".fas.fa-check")).toHaveLength(1);
    });

    it("completed - check icon unavailable", () => {
        const props = {
            post: { completed: true },
        };
        const wrapper = shallow(<Todo {...props} />);
        expect(wrapper.find(".fas.fa-check")).toHaveLength(0);
    });

    it("id matched", () => {
        const props = {
            post: { _id: 1 },
            currentID: 1,
        };
        const wrapper = shallow(<Todo {...props} />);
        expect(wrapper.find(".fa-spinner.fa-spin")).toHaveLength(1);
    });

    it("edit button clicked", () => {
        const props = {
            post: { _id: 1 },
            currentID: 1,
            setCurrentID: jest.fn(),
        };

        const wrapper = shallow(<Todo {...props} />);
        const button = wrapper.find("button.edit-btn");
        button.simulate("click");
        expect(props.setCurrentID).toHaveBeenCalled();
    });
});
