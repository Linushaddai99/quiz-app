import { createAsyncThunk } from '@reduxjs/toolkit';

// https://opentdb.com/api.php?amount=8&category=11&difficulty=easy&type=multiple

// const choiceData = {
//     amount: Number(amount),
//     category: Number(cate),
//     difficulty: difficulty,
//     type: type
//   }

const getQuestions = createAsyncThunk('quiz-app/getQuestions', async (choice) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${choice.amount}&category=${choice.category}&difficulty=${choice.difficulty}&type=${choice.type}`)
      .then((data) => data.json());
    return response;
  } catch (error) {
    return error;
  }
});

export default getQuestions;
