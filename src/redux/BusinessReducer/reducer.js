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
      const groupedData = action.payload.reduce((result, entry) => {
        const monthKey = `${entry.Month}-${entry.Year}`;
        if (!result[monthKey]) {
          result[monthKey] = {
            Month: entry.Month,
            Emissions: 0,
            Revenue: 0,
            YOYREChange: 0,
          };
        }

        result[monthKey].Emissions += entry.Emissions;
        result[monthKey].Revenue += entry.Revenue;

        if (entry["YOYREChange"]) {
          const yoyREChange = parseFloat(entry["YOYREChange"].replace("%", ""));
          result[monthKey]["YOYREChange"] += yoyREChange;
        }

        return result;
      }, {});
      let tempgroupedData = [];
      for (const key in groupedData) {
        groupedData[key]["ExactDate"] = key;
        tempgroupedData.push(groupedData[key]);
      }

      const groupedArray = tempgroupedData.map((entry) => ({
        ...entry,
        RevenueToEmissionsRatio: Number(
          (entry.Revenue / entry.Emissions).toFixed(1)
        ),
      }));

      return {
        ...state,
        isLoading: true,
        data: action.payload,
        dataGroupedByMonth: groupedArray,
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
