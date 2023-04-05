import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    Checkstatus: () => ({ ...initialState, status: 'under construction' }),
  },
});

// Action creators are generated for each case reducer function
export const { Checkstatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
