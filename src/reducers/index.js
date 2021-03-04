import { combineReducers } from 'redux';
import layoutReducer from './layout';


const rootReducer = combineReducers({
    layout: layoutReducer
});


export default rootReducer;