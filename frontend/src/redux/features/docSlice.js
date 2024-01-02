import { createSlice } from "@reduxjs/toolkit";

export const docSlice = createSlice({
  name: "doctor",
  initialState: {
    doctor: null,
  },
  reducers: {
    getDoctor: (state, action) => {
      state.doctor = action.payload;
    },
  },
});
export const { getDoctor } = docSlice.actions;
