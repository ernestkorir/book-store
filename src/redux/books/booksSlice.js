import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books:
  [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    Addbook: (state, action) => {
      state.book.push(action.payload);
    },
    Removebook: (state, action) => {
      const NewState = { ...state };
      NewState.books = state.books.filter((item) => item.id !== action.payload);
      return NewState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addbook, Removebook } = bookSlice.actions;

export default bookSlice.reducer;
