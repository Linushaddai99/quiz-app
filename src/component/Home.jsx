import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getCategories from '../redux/categoriesApi';


const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  console.log(categories)

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch, categories.length]);

  return (
    <div>
      <h1>Home</h1>
      <div>{ categories.length ? categories.map((category) => <p>{category.name}</p>) : status }</div>
    </div>
  )
}

export default Home