import Search from '../server/shared/fetch';
import axios from 'axios';
import * as ActionTypes from '../actions/actionTypes';
const ROOT_URL = 'http://localhost:3090';

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
  auth: null
}


export default function otherInfo(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      let res = axios.post(`${ROOT_URL}/signin`, action.payload);
      return { ...state, auth: res };

    default:
      return state;
  }
}

