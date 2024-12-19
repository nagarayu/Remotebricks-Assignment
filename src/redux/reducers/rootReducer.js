import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  todos: todoReducer,
  employees: employeeReducer,
});