import { combineReducers } from 'redux';

import todos from './todos';
import other from './other';

let rootReducer = combineReducers({
    todos,
    //other
});

export default rootReducer;