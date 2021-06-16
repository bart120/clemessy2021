import { createStore } from "redux";
import authenticationReducer from "./authenticationReducer";

export const store = createStore(authenticationReducer);