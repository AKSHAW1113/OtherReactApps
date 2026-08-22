// src/redux/store.js

import { createStore, combineReducers } from "redux";
import counterReducer from "./redux/counterReducer";

// For Redux DevTools extension
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
///////////////////////////////

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer, reduxDevTools);
