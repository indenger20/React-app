import {combineReducers} from 'redux';
import user from './user';
import main from './main';

const rootReducer = combineReducers({
    user,
    main
});

export default rootReducer