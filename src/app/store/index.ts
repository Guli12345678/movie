import { configureStore } from '@reduxjs/toolkit'
import bookmark from "../../features/wishlist/model/bookMarkSlice";

export const store = configureStore({
  reducer: {
    fake: () => "lorem",
    bookmark,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch