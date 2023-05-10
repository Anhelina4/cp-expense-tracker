import apiSlice from "./apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./reducer";

export const store = configureStore({
  reducer: {
    expense: expenseSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
});
