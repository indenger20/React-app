import * as ActionType from '../actions/actionTypes';


const initialState = {
  data: null,
  isLoading: false,
};


export default (state = initialState, action) => {
  if (!state)
    return initialState;

  switch (action.type) {
    case ActionType.LOGGING_IN:
      return { ...state, isLoading: true };
    case ActionType.LOGGED_IN:
      const user = typeof action.payload.data === 'string' ? 
        { errors: action.payload.data } : 
        action.payload.data;
        
      if (user)
        return {
          ...state,
          data: user,
          isLoading: false,
        };
      else
        window.location.href = '/login';
      return state;
    case ActionType.LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

