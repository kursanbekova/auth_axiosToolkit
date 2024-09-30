import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    todos: todoSlice,
  },
});
export default store;
