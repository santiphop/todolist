import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

// importing actions
import {
    getPosts,
    getTodayPosts,
    getUpcomingPosts,
    getCompletedPosts,
    getUncompletedPosts,
} from "./actions/posts";

// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const dispatch = useDispatch();
    const [currentID, setCurrentID] = useState(null);
    const [status, setStatus] = useState("all");

    useEffect(() => {
        // setStatus from <select> in <Form> component
        // 3 status is > all, completed, uncompleted
        switch (status) {
            case "today":
                dispatch(getTodayPosts());
                break;
            case "upcoming":
                dispatch(getUpcomingPosts());
                break;
            case "completed":
                dispatch(getCompletedPosts());
                break;
            case "uncompleted":
                dispatch(getUncompletedPosts());
                break;
            default:
                dispatch(getPosts());
                break;
        }
    }, [currentID, status, dispatch]);

    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                currentID={currentID}
                setCurrentID={setCurrentID}
                setStatus={setStatus}
            />
            <TodoList
                currentID={currentID}
                setCurrentID={setCurrentID}
                status={status}
            />
        </div>
    );
}

export default App;
