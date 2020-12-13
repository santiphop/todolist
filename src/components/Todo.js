import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, completePost } from "../actions/posts";

// import moment from 'moment'

const Todo = ({ post, currentID, setCurrentID }) => {
    const dispatch = useDispatch();

    const editHandler = () => {
        setCurrentID(post._id);
        window.scrollTo(0, 0);
    };
    const deleteHandler = () => dispatch(deletePost(post._id));
    const completeHandler = () => dispatch(completePost(post._id));

    return (
        <div className="todo">
            <li
                className={`todo-item ${
                    post.completed ? "completed-line" : ""
                }`}
            >
                {post.title}
            </li>
            <button onClick={editHandler} className="edit-btn">
                <i
                    className={`fas ${
                        currentID !== post._id
                            ? "fa-edit"
                            : "fa-spinner fa-spin"
                    }`}
                ></i>
            </button>
            <button onClick={completeHandler} className="complete-btn">
                <i
                    className={`fas fa-${post.completed ? "undo" : "check"}`}
                ></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;
