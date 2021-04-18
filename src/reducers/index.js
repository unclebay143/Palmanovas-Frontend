import { combineReducers } from 'redux';
import layoutReducer from './layout';
import userReducer from './userReducer';
import userReferralsReducer from './referralReducer';
import testReducer from './testReducer';

const rootReducer = combineReducers({
    layout: layoutReducer,
    user: userReducer,
    referrals: userReferralsReducer,
    test: testReducer,
});


export default rootReducer;