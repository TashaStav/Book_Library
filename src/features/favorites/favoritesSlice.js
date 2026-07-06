import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const exists = state.items.find(
        (book) => book.key === action.payload.key
      );

      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFavorite(state, action) {
      state.items = state.items.filter((book) => book.key !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
