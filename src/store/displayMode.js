import { createSlice } from "@reduxjs/toolkit";

const initialDisplayState = { isLight: true };

const displayModeSlice = createSlice({
  name: "displayModeSlice",
  initialState: initialDisplayState,
  reducers: {
    changeDisplayMode(state, action) {
      state.isLight = !state.isLight;
    },
  },
});

export const { changeDisplayMode } = displayModeSlice.actions;

export default displayModeSlice.reducer;
