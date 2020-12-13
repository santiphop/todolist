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
import * as api from "../api";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getTodayPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_TODAY, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getUpcomingPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_UPCOMING, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getCompletedPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_COMPLETED, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getUncompletedPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_UNCOMPLETED, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const completePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.completePost(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
