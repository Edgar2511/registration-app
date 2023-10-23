import { applyMiddleware, combineReducers, createStore } from "redux";
import { AuthReducer } from "./auth/reducer";
import thunk from "redux-thunk";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth: AuthReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;
