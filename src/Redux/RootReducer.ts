import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import fetchReducer from "./fetchReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  fetch: fetchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
