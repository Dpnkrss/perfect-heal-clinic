import { createSlice } from "@reduxjs/toolkit";

export const docSlice = createSlice({
  name: "doctor",
  initialState: {
    doctor: null,
  },
  reducers: {
    setDoctor: (state, action) => {
      state.doctor = action.payload;
    },
  },
});
export const { setDoctor } = docSlice.actions;
