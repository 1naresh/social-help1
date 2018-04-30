import { combineReducers } from 'redux';

import   users   from './user.reducer';

const allReducers=combineReducers({
    users:users
})
export default allReducers;