import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter.js";


export const store = configureStore({
  reducer: {counter: counterReducer},
});
