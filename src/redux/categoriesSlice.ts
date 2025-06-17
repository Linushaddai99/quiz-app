import { createSlice } from '@reduxjs/toolkit';
import getCategories from './categoriesApi';
import { CategoriesState } from '../types/types';

const initialState: CategoriesState = {
    categories: [],
    status: 'idle',
    error: null,
  }

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCategories.fulfilled, (state, action) => ({
        ...state,
        categories: action.payload.trivia_categories,
      }))
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default categoriesSlice.reducer;
