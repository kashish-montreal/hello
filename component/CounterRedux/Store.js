import { legacy_createStore } from "redux";
import { nameReducer } from "./Reducer";





export const rStore=legacy_createStore(nameReducer)