import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    Addbook: (state, action) => {
      state.book.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    },
    Removebook: (state, action) => {
      const NewState = { ...state };
      NewState.book = state.book.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addbook, Removebook } = bookSlice.actions;

export default bookSlice.reducer;
