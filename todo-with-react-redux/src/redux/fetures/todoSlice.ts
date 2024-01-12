import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlic = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlic.reducer;
