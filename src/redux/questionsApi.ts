import { createAsyncThunk } from '@reduxjs/toolkit';
import { Question } from '../types/types';
import { ChoiceType } from '../types/types';


const getQuestions = createAsyncThunk(
  'quiz-app/getQuestions',
  async (choice: ChoiceType) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${choice.amount}&category=${choice.category}&difficulty=${choice.difficulty}&type=${choice.type}`,
      ).then((data) => data.json());
      return response;
    } catch (error) {
      return error;
    }
  },
);

export default getQuestions;
