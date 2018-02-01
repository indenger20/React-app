export const addCommentAction = (comment) => {
    return {
        type: "ADD_COMMENT",
        payload: comment
    }
}

export const actionLogin = (login) => {
    return {
        type: "CHECK_AUTH",
        payload: login
    }
}

export const saveInfoUser = (userInfo) => {
    return {
        type: "SAVE_INFO_USER",
        payload: userInfo
    }
}
