import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMovie } from "../../../entities/movie";

interface IBookMark {
  value: IMovie[];
}

const initialState: IBookMark = {
  value: JSON.parse(localStorage.getItem("bookmark") || "[]") || [],
};

export const bookMarkSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<IMovie>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push(action.payload);
      } else {
        state.value.splice(index, 1);
      }
      localStorage.setItem("bookmark", JSON.stringify(state.value));
    },
  },
});

export const { toggleLike } = bookMarkSlice.actions;

export default bookMarkSlice.reducer;
