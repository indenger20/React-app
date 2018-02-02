import * as ActionTypes from './actionTypes';

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
