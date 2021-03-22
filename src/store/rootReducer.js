/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import { AuthReducer, NewsReducer } from './reducers'

const rootReducer = combineReducers({
    auth: AuthReducer,
    news: NewsReducer,
});

export default rootReducer;