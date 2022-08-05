import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  emptyResults: false,
  searchedCardData: [],
};

const searchedCardSlice = createSlice({
  name: "searchedCardData",
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
      state.emptyResults = false;
      state.error = false;
    },
    fetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.emptyResults = false;
      state.error = false;
      state.searchedCardData = [payload];
    },
    setEmptyResults: (state) => {
      state.emptyResults = true;
    },
    fetchRejected: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default searchedCardSlice.reducer;
export const searchedCardSliceActions = searchedCardSlice.actions;
