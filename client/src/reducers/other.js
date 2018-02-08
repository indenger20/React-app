import Search from '../server/shared/fetch';
import axios from 'axios';
import * as ActionTypes from '../actions/actionTypes';
const ROOT_URL = '';

const initialState = {
  nav: [
    {
      "text": "Home",
      "path": "/"
    },
    {
      "text": "About",
      "path": "/about"
    }
  ],
  auth: null,
  users: [],
}


export default function otherInfo(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      let res = axios.post(`/api/signin`, action.payload);
      return { ...state, auth: res };
    case ActionTypes.NEW_USER:
      var res = axios.post(`/api/signup`, action.payload);
      res.then((el) => ({ ...state, users: state.users.push(el) }))
    default:
      return state;
  }
}

