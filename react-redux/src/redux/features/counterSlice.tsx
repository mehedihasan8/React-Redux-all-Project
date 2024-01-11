import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    dicrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    dicrementByValue: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, dicrement, incrementByValue, dicrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
