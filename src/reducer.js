import { combineReducers } from 'redux';
import usersReducer from './features/users/userSlice';

const rootReducer = combineReducers({
  users: usersReducer,
 
});

export default rootReducer;
