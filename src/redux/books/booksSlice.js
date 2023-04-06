import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/weg5BK1ukhujeWVuPbRs/books';

const initialState = {
  books: [],
};

export const fetchbook = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get(url);
  const response = res.data;
  const books = Object.keys(response).map((key) => ({
    item_id: key,
    ...response[key][0],
  }));
  return books;
});

export const addbook = createAsyncThunk('books/addbook', async (book) => {
  await axios.post(url, book);
  return book;
});

export const removebook = createAsyncThunk('books/removebook', async (id) => {
  await axios.delete(`${url}/${id}`);
  return id;
});

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchbook.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.books = action.payload;
      return newState;
    });
    builder.addCase(addbook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });

    builder.addCase(removebook.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== action.payload);
      return newState;
    });
  },
});
// Action creators are generated for each case reducer function
export default bookSlice.reducer;
