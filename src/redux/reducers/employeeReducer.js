import { FETCH_EMPLOYEES_SUCCESS } from '../actions/employeeActions';

const initialState = [];

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};