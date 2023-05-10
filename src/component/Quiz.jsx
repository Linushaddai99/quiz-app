import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getQuestions from "../redux/questionsApi";
import { useLocation } from "react-router-dom";
import Form from "./Form";

const Quiz = () => {
  const location = useLocation();
  const choice = location.state;

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const status = useSelector((state) => state.categories.status);
  console.log(questions);

  useEffect(() => {
    dispatch(getQuestions(choice));
  }, [dispatch, questions.length]);

  return (
    <div className="container question-card">
      <span>Category: </span>
      <span>{questions[0]?.category}</span>
      <Form questions={questions} status={status} />
    </div>
  );
};

export default Quiz;
