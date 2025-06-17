import { createSlice } from '@reduxjs/toolkit';
import getQuestions from './questionsApi';
import { QuestionsState } from '../types/types';

const initialState: QuestionsState = {
    questions: [],
    status: 'idle',
    error: null,
  }

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestions.fulfilled, (state, action) => ({
        ...state,
        questions: action.payload.results,
      }))
      .addCase(getQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default questionsSlice.reducer;
