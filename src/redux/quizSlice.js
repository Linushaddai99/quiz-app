import { createSlice } from "@reduxjs/toolkit";
import getQuestions from "./questionsApi";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuestions.fulfilled, (state, action) => ({
        ...state,
        questions: action.payload.results,
      }))
      .addCase(getQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default questionsSlice.reducer;
