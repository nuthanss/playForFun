import { combineReducers } from 'redux';
import searchFilterReducer from './searchFilter.reducer';

export default combineReducers({
    searchFilter: searchFilterReducer
  });