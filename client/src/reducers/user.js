import * as ActionType from '../actions/actionTypes';


const initialState = {
  data: {
    name: null,
    desc: null,
    status: null,
  },
  isLoading: false,
};


export default (state = initialState, action) => {
  if (!state)
    return initialState;

  switch (action.type) {
    case ActionType.LOGGING_IN:
      return { ...state, isLoading: true };
    case ActionType.LOGIN_SUCCESS:
      const user = typeof action.payload === 'string' ? 
        { errors: action.payload } : 
        action.payload;
      
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
    case ActionType.LOGIN_REQUEST:
        return state;
    case ActionType.LOGIN_SUCCESS:
        return state;
    case ActionType.LOGIN_FAILURE:
        return state;
    default:
      return state;
  }
};

