import {combineReducers} from 'redux';
import userInfo from './info';
import otherInfo from './other';

const rootReducer = combineReducers({
    userInfo,
    otherInfo
});

export default rootReducer