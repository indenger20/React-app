import decode from 'jwt-decode';
import { Route, Redirect } from 'react-router-dom';
import auth0 from 'auth0-js';
import React from 'react';
import axios from 'axios';


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (authHeader()) {
      return <Component {...props} />;
    }
    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

  }} />
)

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (!authHeader()) {
      return <Component {...props} />;
    }
    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />

  }} />
)


export function login(newUser) {

  return axios.post('/api/signin', newUser)
    .then((response) => {
      if (!response.data) {
        return Promise.reject(response.statusText);
      }

      return response.data;
    }).then(user => {
      // login successful if there's a jwt token in the response

      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });

  // auth.authorize({
  //   responseType: 'token id_token',
  //   redirectUri: REDIRECT,
  //   audience: AUDIENCE,
  //   scope: SCOPE
  // });

}

export function register(user) {
  return axios.post('/api/signup', JSON.stringify(user))
    .then(response => {
      if (!response.data) {
        return Promise.reject(response.statusText);
      }
      return response.data;
    }).then(user => {
      // login successful if there's a jwt token in the response

      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

export function saveInfoUser(info) {
  const user = authHeader();
  const data = {
    ...user,
    ...info,
  };
  return axios.post('/api/updInfo', data);
}

function handleResponse(response) {
  if (response.statusText !== 'OK') {
    return Promise.reject(response.statusText);
  }

  return response.json();
}


export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return user;
  } else {
    return false;
  }
}

export const updateLocalSrotage = ({ data }) => {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const model = {
    ...localUser,
    ...data,
  };
  localStorage.setItem('user', JSON.stringify(model));
  return model;
}

export const authorization = (data) => {
  return axios.post('/api/auth', JSON.stringify(data));
}

export function logOut() {
  const user = authHeader();
  localStorage.removeItem('user');
}