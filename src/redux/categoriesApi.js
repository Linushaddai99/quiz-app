import { createAsyncThunk } from '@reduxjs/toolkit';

const getCategories = createAsyncThunk('quiz-app/getCountries', async () => {
  try {
    const response = await fetch('https://opentdb.com/api_category.php')
      .then((data) => data.json());
    return response;
  } catch (error) {
    return error;
  }
});

export default getCategories;
