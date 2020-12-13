import {
    FETCH_ALL,
    FETCH_TODAY,
    FETCH_UPCOMING,
    FETCH_COMPLETED,
    FETCH_UNCOMPLETED,
    CREATE,
    UPDATE,
    DELETE,
} from "../constants/actionTypes";

import moment from "moment";

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_TODAY:
            return action.payload.filter((post) =>
                moment(post.dueDate).isSame(new Date(), "day")
            );
        case FETCH_UPCOMING:
            return action.payload.filter((post) =>
                moment(post.dueDate).isAfter(new Date(), "day")
            );
        case FETCH_COMPLETED:
            return action.payload.filter((post) => post.completed);
        case FETCH_UNCOMPLETED:
            return action.payload.filter((post) => !post.completed);
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
};
