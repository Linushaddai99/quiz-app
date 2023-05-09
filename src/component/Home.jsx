import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getCategories from '../redux/categoriesApi';
// import getQuestions from '../redux/questionsApi';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch, categories.length]);

  const navigate = useNavigate();

  const [amount, setAmount] = useState()
  const [cate, setCate] = useState();
  const [difficulty, setDifficulty] = useState();
  const [type, setType] = useState();

  const handleForm =(e)=> {
    e.preventDefault()

    const choiceData = {
      amount: Number(amount),
      category: Number(cate),
      difficulty: difficulty,
      type: type
    }

    console.log(choiceData)
    // dispatch(getQuestions(choiceData));
    navigate('/quiz', { state: choiceData });
  }


  return (
    <div className='container'>
      <h1>Take A Quiz</h1>
      <form onSubmit={handleForm}>
        <label for="number">Number of quesions:</label>
        <input type="number" onChange={e => setAmount(e.target.value)} />

        <label for="category">Select Category:</label>
        <select name="categories" id="categories" onChange={e => setCate(e.target.value)}>
        <option value="Any Category">Choose Category</option>
          {categories.map((category) => (
          <option value={category.id}>{category.name}</option>)
          )}
        </select>

        <label for="difficulty">Select Difficulty:</label>
        <select name="difficulty" id="difficulty" onChange={e => setDifficulty(e.target.value)}>
          <option value="Any difficulty">Choose difficulty</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>

        <label for="type">Select Type:</label>
        <select name="type" id="type" onChange={e => setType(e.target.value)}>
        <option value="Any type">Choose type</option>
          <option value="multiple">multiple</option>
          <option value="boolean">boolean</option>
        </select>

        <button type="submit">Generate Questions</button>
      </form>
    </div>
  )
}

export default Home