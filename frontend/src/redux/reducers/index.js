import { combineReducers } from 'redux'

import auth from './auth';
import board from './board';
import lists from './lists';
import activities from './activities';

const reducers = combineReducers({
    auth,
    board,
    lists,
    activities
})

export default reducers