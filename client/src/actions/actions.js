import * as ActionTypes from './actionTypes';
import axios from 'axios';

import * as userService from '../services';

function already(user) { return { type: ActionTypes.LOGIN_ALREADY, payload: user } }

export const addCommentAction = (comment) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: comment
  }
}

export const actionLogin = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));
    const user = userService.authHeader();
    if (!user) {
      userService.login(username, password)
        .then(
          user => {
            dispatch(success(user));
            // history.push('/');
          },
          error => {
            dispatch(failure(error));
          }
        );
    } else {
      dispatch(already({ data: user }))
    }
  };

  function request(user) { return { type: ActionTypes.LOGIN_REQUEST, payload: user } }
  function success(user) { return { type: ActionTypes.LOGIN_SUCCESS, payload: user } }
  function failure(error) { return { type: ActionTypes.LOGIN_FAILURE, payload: error } }
}

export const authorization = (user) => {
  return dispatch => {
    userService.authorization(user)
      .then(
        user => {
          dispatch({
            type: ActionTypes.LOGIN_AUTHORIZATION,
            payload: user.data
          });
        },
        error => {
          dispatch(failure(error));
        }
      );
  };
  function failure(error) { return { type: ActionTypes.LOGIN_FAILURE, payload: error } }
}

export const saveInfoUser = (data) => {
  return dispatch => {
    userService.saveInfoUser(data)
      .then(
        user => {
          dispatch(success(user));
          dispatch(already(user))
        },
        error => {
          // dispatch(failure(error));
        }
      );
  };
  function success(user) { return { type: ActionTypes.SAVE_INFO_USER, payload: user } }
}

export const actionRegistration = (newUser) => {
  return dispatch => {
    dispatch(request({ newUser }));

    userService.register(newUser)
      .then(
        user => {
          dispatch(success(user));
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: user.data
          })
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: ActionTypes.REGISTER_REQUEST, payload: user } }
  function success(user) { return { type: ActionTypes.REGISTER_SUCCESS, payload: user } }
  function failure(error) { return { type: ActionTypes.REGISTER_FAILURE, payload: error } }
}

export const logOut = () => {
  return {
    type: ActionTypes.LOGGED_OUT,
    payload: null
  }
}