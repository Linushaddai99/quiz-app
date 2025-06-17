import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../types/types';

type CategoriesApiResponse = {
  trivia_categories: Category[];
};

const getCategories = createAsyncThunk<CategoriesApiResponse>('quiz-app/getCountries', async () => {
  try {
    const response = await fetch('https://opentdb.com/api_category.php')
      .then((data) => data.json());
    return response;
  } catch (error) {
    return error;
  }
});

export default getCategories;
