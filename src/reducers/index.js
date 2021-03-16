import { combineReducers } from 'redux';
import layoutReducer from './layout';
import userReducer from './userReducer'

const rootReducer = combineReducers({
    layout: layoutReducer,
    user: userReducer,
});


export default rootReducer;