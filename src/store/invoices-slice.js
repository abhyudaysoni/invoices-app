import { createSlice } from "@reduxjs/toolkit";

const invoicesInitialState = [];

const invoicesSlice = createSlice({
  name: "invoicesSlice",
  initialState: invoicesInitialState,
  reducers: {
    addNewInvoice(state, action) {
      state.push(action.payload);
    },
    removeInvoice(state, action) {
      state = state.filter((element) => element.id !== action.payload);
    },
  },
});

export const { addNewInvoice, removeInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
