import { combineReducers } from 'redux';

// reducers are below
import players from './players';
import filter from './filters';

const rootReducer = combineReducers({players, filter});

export default rootReducer;
