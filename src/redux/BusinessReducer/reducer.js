import { createSlice } from "@reduxjs/toolkit";
import { MonthMapper } from "../../utils/helpers";

export const businessSlice = createSlice({
  name: "businessReducer",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
    dataGroupedByMonth: [],
  },
  reducers: {
    loadingBusiness(state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    successBusiness(state, action) {
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    },
    errorBusiness(state, action) {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    },
    filterBusiness(state, action) {
      const target = action?.payload;

      let filteredData = state.data.filter((entry) => {
        const minYear = Number(target?.min.split("-")[0]);
        const maxYear = Number(target?.max.split("-")[0]);
        const minMonth = Number(target?.min.split("-")[1]);
        const maxMonth = Number(target?.max.split("-")[1]);
        const mappedMonth = Number(MonthMapper(entry.Month));
        // console.log("minYear:", minYear);
        // console.log("maxYear:", maxYear);
        // console.log("minMonth:", minMonth);
        // console.log("maxMonth:", maxMonth);
        // console.log("mappedMonth:", mappedMonth);
        if (
          (entry.Year == minYear || entry.Year == maxYear) &&
          mappedMonth >= minMonth &&
          mappedMonth <= maxMonth
        ) {
          return entry;
        }
      });

      return {
        ...state,
        data: filteredData,
        isLoading: false,
        isError: true,
      };
    },
  },
});
export const {
  loadingBusiness,
  successBusiness,
  errorBusiness,
  filterBusiness,
} = businessSlice.actions;
