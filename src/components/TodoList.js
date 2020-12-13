import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const TodoList = ({ currentID, setCurrentID, status }) => {
    const posts = useSelector((state) => state.posts);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                <h1>{status}</h1>
                {posts.map((post) => (
                    <Todo
                        post={post}
                        key={post._id}
                        currentID={currentID}
                        setCurrentID={setCurrentID}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
