import * as ActionTypes from './actionTypes';
import axios from 'axios';

import * as userService from '../services';

export const addCommentAction = (comment) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: comment
  }
}

export const actionLogin = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));

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
  };

  function request(user) { return { type: ActionTypes.LOGIN_REQUEST, payload: user } }
  function success(user) { return { type: ActionTypes.LOGIN_SUCCESS, payload: user } }
  function failure(error) { return { type: ActionTypes.LOGIN_FAILURE, payload: error } }
}

export const saveInfoUser = (data) => {
  return dispatch => {
    userService.saveInfoUser(data)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          // dispatch(failure(error));
        }
      );
  };
  function success(user) { return { type: ActionTypes.REGISTER_SUCCESS, user } }
}

export const actionRegistration = (newUser) => {
  return dispatch => {
    dispatch(request({ newUser }));

    userService.register(newUser)
      .then(
        user => {
          dispatch(success(user));
          // history.push('/login');
          // dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: ActionTypes.REGISTER_REQUEST, user } }
  function success(user) { return { type: ActionTypes.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: ActionTypes.REGISTER_FAILURE, error } }
}