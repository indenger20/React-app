import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const login = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.USER_LOGGING_IN
    })
    // Wait 2 seconds before "logging in"
    setTimeout(() => {
      dispatch({
        type: ActionTypes.USER_LOGGED_IN,
        payload: '1'
      })
    }, 2000)
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

export const saveInfoUser = (user) => {
  return {
    type: ActionTypes.SAVE_INFO_USER,
    payload: user
  }
}

export const actionRegistration = (newUser) => {
  const req = axios.post('/api/signup', newUser);
  return dispatch => {
    dispatch({
      type: ActionTypes.LOGGING_IN,
    })
    req.then((newUser) => {
      dispatch({
        type: ActionTypes.LOGGED_IN,
        payload: newUser
      })
    })
  };
}