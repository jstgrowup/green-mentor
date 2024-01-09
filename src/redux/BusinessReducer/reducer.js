import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "businessReducer",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  reducers: {
    loadingBusiness(state,action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    successBusiness(state,action) {
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    },
    errorBusiness(state,action) {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    },
  },
});
export const { loadingBusiness, successBusiness, errorBusiness } =
businessSlice.actions;

