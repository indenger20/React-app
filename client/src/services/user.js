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
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return axios('/api/signup', requestOptions).then(handleResponse);
}

export function saveInfoUser(info) {
  const user = authHeader();
  const data = {
    ...user,
    ...info,
  };
  return axios.post('/api/updInfo', data).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
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