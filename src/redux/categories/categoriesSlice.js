import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    Checkstatus: () => ({ ...initialState, status: 'under construction' }),
  },
});

// Action creators are generated for each case reducer function
export const { Checkstatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
