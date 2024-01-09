import { configureStore } from "@reduxjs/toolkit";
import { businessSlice } from "./BusinessReducer/reducer";

export const store = configureStore({
  reducer: {
    business: businessSlice.reducer,
  },
});
