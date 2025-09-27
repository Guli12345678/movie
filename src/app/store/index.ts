import { configureStore } from "@reduxjs/toolkit";
import bookmark from "../../features/wishlist/model/bookMarkSlice";
import { authSlice } from "../../features/auth/model/authSlie";

export const store = configureStore({
  reducer: {
    fake: () => "lorem",
    bookmark,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
