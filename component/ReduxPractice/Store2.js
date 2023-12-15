import { legacy_createStore } from "redux";
import { nameReducer } from "./Reducer2";


export const nameStore=legacy_createStore(nameReducer)