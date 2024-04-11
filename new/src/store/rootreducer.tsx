import { combineReducers } from "@reduxjs/toolkit";

import { reducer as auth } from "store/modules/auth";


export const rootReducer = combineReducers({
  auth,
  
});
