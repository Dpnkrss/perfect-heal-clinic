import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { docSlice } from "./features/docSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    doctor: docSlice.reducer,
  },
});
