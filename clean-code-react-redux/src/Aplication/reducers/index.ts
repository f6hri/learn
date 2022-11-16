import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const reducers = combineReducers({
  Todo: TodoReducer,
});

export default reducers;