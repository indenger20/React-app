import Search from '../server/shared/fetch';
import * as ActionTypes from '../actions/actionTypes';


const initialState = {
  users: [],
}


export default function main(state = initialState, action) {
  if (!state)
    return initialState;

  switch (action.type) {

    case ActionTypes.GET_USERS:
      const users = action.payload.data;
      return {
        ...state,
        users
      }

    default:
      return state;
  }
}

