import { combineReducers } from 'redux-loop';
import feed from './feed/feedReducer.js'

const rootReducer = combineReducers({
    feed
});

export default rootReducer;