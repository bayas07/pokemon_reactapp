import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  cardData: [],
  nextPage: "",
};

const cardDataSlice = createSlice({
  name: "cardData",
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.cardData = [...state.cardData, ...payload];
    },
    fetchRejected: (state) => {
      state.loading = false;
      state.error = true;
    },
    setNextPage: (state, { payload }) => {
      state.nextPage = payload;
    },
  },
});

export default cardDataSlice.reducer;
export const cardDataSliceActions = cardDataSlice.actions;
