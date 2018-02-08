import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const login = () => {
    return dispatch => {
        dispatch({
            type: ActionTypes.LOGGING_IN,
        });
        axios
            .get('/auth/status')
            .then(r => {
                const { user } = r.data;
                dispatch({
                    type: ActionTypes.LOGGED_IN,
                    payload: { user },
                });
            });
    };

};

export const addCommentAction = (comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const actionLogin = (login) => {
    return {
        type: ActionTypes.AUTH_USER,
        payload: login
    }
}

export const saveInfoUser = (userInfo) => {
    return {
        type: ActionTypes.SAVE_INFO_USER,
        payload: userInfo
    }
}

export const actionRegistration = (newUser) => {
    return {
        type: ActionTypes.NEW_USER,
        payload: newUser
    }
}