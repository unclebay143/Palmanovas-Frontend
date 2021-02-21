import { combineReducers } from 'redux';
import sample from './sample';


const rootReducer = combineReducers({
    testing: sample
});


export default rootReducer;