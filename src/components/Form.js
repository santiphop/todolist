import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ currentID, setCurrentID, setStatus }) => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

    const post = useSelector((state) =>
        currentID ? state.posts.find((p) => p._id === currentID) : null
    );
    const [postData, setPostData] = useState({
        title: "",
        comment: "",
    });

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const dateHandler = (date) => {
        setPostData({ ...postData, dueDate: date });
        setStartDate(date);
    };

    const statusHandler = (e) => setStatus(e.target.value);
    const insertHandler = (e) => {
        e.preventDefault();
        if (postData.title) {
            if (currentID) {
                dispatch(updatePost(currentID, postData));
            } else {
                dispatch(createPost(postData));
            }
            clearInput();
        }
    };

    const clearInput = () => {
        setCurrentID(null);
        setStartDate(new Date());
        setPostData({ title: "", comment: "", dueDate: "" });
    };
    return (
        <form>
            <input
                value={postData.title}
                onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                }
                type="text"
                className="todo-input"
                placeholder="What's your plan?"
            />
            <DatePicker
                selected={startDate}
                // onChange={(date) => set(date)}
                onChange={dateHandler}
                disabledKeyboardNavigation
                className="date-btn"
                dateFormat="yyyy/MM/dd"
            />
            <button
                onClick={insertHandler}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
