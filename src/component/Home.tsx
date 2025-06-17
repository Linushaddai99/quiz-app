import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { useEffect } from "react";
import getCategories from "../redux/categoriesApi";
import { useNavigate } from "react-router-dom";
import getQuestions from "../redux/questionsApi";
import { ChoiceType } from "../types/types";
import { RootState } from "../redux/configStore";

const Home = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state: RootState) => state?.categories?.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch, categories?.length]);

  const navigate = useNavigate();

  const [amount, setAmount] = useState('');
  const [cate, setCate] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [err, setErr] = useState("");

  const formValidation = (data: ChoiceType) => {
    const result = [...Object.values(data)];

    if (result.includes(NaN || undefined)) {
      setErr("Please Fill out all the select dropdown!!!");
    } else {
      dispatch(getQuestions(data));
      navigate("/quiz");
    }
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const choiceData = {
      amount: Number(amount),
      category: Number(cate),
      difficulty: difficulty,
      type: type,
    };

    formValidation(choiceData);
  };


  return (
    <div className="container selection-form">
      <h1>Take A Quiz</h1>
      <p className="error-msg">{err}</p>
      
      <form onSubmit={handleForm}>
        <label htmlFor="number">Number of quesions:</label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Maximum of 10"
          className="text-field"
          required
        />

        <label htmlFor="category">Select Category:</label>
        <select
          required
          name="categories"
          id="categories"
          value={cate}
          onChange={(e) => setCate(e.target.value)}
          className="text-field"
        >
          <option value="Any Category">Choose Category</option>
          {categories?.map((category) => (
            <option value={category?.id} key={category.id}>{category?.name}</option>
          ))}
        </select>

        <label htmlFor="difficulty">Select Difficulty:</label>
        <select
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="text-field"
          required
        >
          <option value="Any difficulty">Choose difficulty</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>

        <label htmlFor="type">Select Type:</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="text-field"
          required
        >
          <option value="Any type">Choose type</option>
          <option value="multiple">Multiple</option>
          <option value="boolean">True/False</option>
        </select>

        <button type="submit">Generate Questions</button>
      </form>
    </div>
  );
};

export default Home;
