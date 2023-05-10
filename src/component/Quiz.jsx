import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

const Quiz = () => {
  const questions = useSelector((state) => state.questions.questions);
  const status = useSelector((state) => state.categories.status);


  return (
    <div className="container question-card">
      <span>Category: </span>
      <span>{questions[0]?.category}</span>
      <Form questions={questions} status={status} />
    </div>
  );
};

export default Quiz;
