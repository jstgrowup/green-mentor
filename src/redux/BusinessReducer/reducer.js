import { BUSINESS_FAILURE, BUSINESS_REQUEST, BUSINESS_SUCCESS } from "./actionTypes";

export const businessInitialState = {
  isLoading: false,
  isError: false,
  data: [],
};
export const businessReducer = (
  state = businessInitialState,
  { type, payload }
) => {
  switch (type) {
    case BUSINESS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BUSINESS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }

    case BUSINESS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
