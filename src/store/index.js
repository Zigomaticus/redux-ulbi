import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Reducers
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
// Devtools
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
