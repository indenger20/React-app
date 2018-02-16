import Search from '../server/shared/fetch';
import * as ActionTypes from '../actions/actionTypes';


const initialState = {
  
}


export default function main(state = initialState, action) {
  if (!state)
    return initialState;
    
  switch (action.type) {
    
    default:
      return state;
  }
}

