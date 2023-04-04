import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    Addbook: (state, action) => {
      state.book.push(action.payload);
    },
    Removebook: (state, action) => {
      const NewState = { ...state };
      NewState.book = state.book.filter((item) => item.id !== action.payload);
      return NewState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addbook, Removebook } = bookSlice.actions;

export default bookSlice.reducer;
