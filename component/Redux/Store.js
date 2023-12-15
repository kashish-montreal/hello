import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { nameReducer } from "./Reducer";
import logger from "redux-logger"
const cb=combineReducers({
    name:nameReducer
})

export const reduxStore=legacy_createStore(cb,applyMiddleware(logger))