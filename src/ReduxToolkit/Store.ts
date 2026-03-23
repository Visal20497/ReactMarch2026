import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import fetchSlice from "./FetchSlice";

const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
    fetch: fetchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
