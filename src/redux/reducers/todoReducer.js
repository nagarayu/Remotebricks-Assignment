import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/todoActions';

const initialState = [];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map(todo => 
        todo.id === action.payload.id ? { ...todo, ...action.payload.updatedTodo } : todo
      );
    default:
      return state;
  }
};