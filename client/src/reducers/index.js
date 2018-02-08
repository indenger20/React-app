import {combineReducers} from 'redux';
import userInfo from './user';
import otherInfo from './other';

const rootReducer = combineReducers({
    userInfo,
    otherInfo
});

export default rootReducer