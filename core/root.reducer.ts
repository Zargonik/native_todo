import { combineReducers } from "redux";

// import * as todoReducers from "./modules/todo.list/todo.reducer";

import todosReducer from "./modules/todo.list/todo.reducer";

export default combineReducers({
  todos: todosReducer
});
