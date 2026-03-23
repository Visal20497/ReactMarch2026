import { createStore, type Store } from "redux";
import rootReducer from "./RootReducer";

const store: Store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;

export default store;
