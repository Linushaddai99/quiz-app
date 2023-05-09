import { configureStore } from '@reduxjs/toolkit';
import categories from './categoriesSlice';
import questions from './quizSlice';

const store = configureStore({
  reducer: {
    categories,
    questions,
  },
});

export default store;
