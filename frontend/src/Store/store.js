import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(require("redux-logger").default)
}

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);

export default store;