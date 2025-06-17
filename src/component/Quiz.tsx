import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/stateHooks";
import { RootState } from "../redux/configStore";
import Form from "./Form";

const Quiz = () => {
  const questions = useAppSelector((state: RootState) => state.questions.questions);
  const status = useAppSelector((state: RootState) => state.categories.status);


  return (
    <div className="container question-card">
      <span>Category: </span>
      <span>{questions[0]?.category}</span>
      <Form questions={questions} status={status} />
    </div>
  );
};

export default Quiz;
