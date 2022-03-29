// Reducers
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
// Store
import { createStore, combineReducers } from "redux";
// Devtools
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
