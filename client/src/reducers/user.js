import * as ActionType from '../actions/actionTypes';
import * as userService from '../services';

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
        { errors: action.payload.data } :
        action.payload;

      if (user) {
        window.location.href = '/';
        return {
          ...state,
          data: user,
          isLoading: false,
        };
      }
      window.location.href = '/login';
      return state;
    case ActionType.LOGIN_REQUEST:
      return state;
    case ActionType.LOGIN_FAILURE:
      return state;
    case ActionType.LOGIN_ALREADY:
      if (!action.payload) {
        window.location.href = '/';
        return state;
      } else {
        const { data } = action.payload;
        return { ...state, data };
      }
    case ActionType.LOGGED_OUT:
      userService.logOut();
      window.location.href = '/';
      return {
        ...state,
        data: null
      };
    case ActionType.SAVE_INFO_USER:
      const data = userService.updateLocalSrotage(action.payload);
      return {
        ...state,
        data,
      };
    case ActionType.LOGIN_AUTHORIZATION:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

