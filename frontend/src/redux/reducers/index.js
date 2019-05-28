import { combineReducers } from 'redux'

import auth from './auth';
import board from './board';
import boards from './boards';
import lists from './lists';
import activities from './activities';
import userInfo from './user-info';

const reducers = combineReducers({
    auth,
    board,
    boards,
    lists,
    activities,
    userInfo
})

export default reducers