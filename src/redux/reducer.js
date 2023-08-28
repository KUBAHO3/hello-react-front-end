import { combineReducers } from 'redux';
import { greetingSlice } from './actions';

const rootReducer = combineReducers({
  greeting: greetingSlice.reducer,
});

export default rootReducer;