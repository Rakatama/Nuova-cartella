import { combineReducers } from "@reduxjs/toolkit";
import loadSlice from "./loadSlice";

export default combineReducers({
    LoadSlice: loadSlice
});