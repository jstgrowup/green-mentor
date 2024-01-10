import { createSlice } from "@reduxjs/toolkit";

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
  },
});
export const { loadingBusiness, successBusiness, errorBusiness } =
  businessSlice.actions;
