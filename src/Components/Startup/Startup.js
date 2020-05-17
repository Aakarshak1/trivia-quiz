import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { Select } from '../../Utility/styles';
import * as actions from '../../store/action/rootAction';
import Gameboard from '../Gameboard/Gameboard';

const SelectLoader = styled(Select)`
  margin-top: 2rem;
  position: relative;
  top: 100px;
`;

const LoaderDiv = styled.div`
  width: 800px;
  position: absolute;
  height: 200px;
  margin: -100px 0 0 -200px;
  top: 45%;
  left: 45%;
`;

const SubmitButton = styled.button`
  display: inline-block;
  font-size: 2.5rem;
  padding: 1rem;
  width: 30%;
  background-color: rgb(11, 31, 58);
  color: rgb(196, 154, 104);
  border: solid rgb(11, 31, 58) 1px;
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.8);
  transition-duration: 1500;
  position: relative;
  left: 35%;
  top: 130px;
  &:hover {
    box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.6);

    border: solid #fff 1px;
    cursor: pointer;
  }
  &:active {
    transform: translate(0);
  }
`;

const Startup = () => {
  const data = {
    category: 'Select Categories',
    questionCount: 'Number of Questions',
    difficulty: 'Select Difficulty',
  };

  const [formValue, setFormValue] = useState(data);
  const [showComponent, setShowComponent] = useState(false);

  const categories = useSelector((state) => state.trivia.categories);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    //TODO Error Handling in React
    e.preventDefault();
    const { category, questionCount, difficulty } = formValue;

    if (
      category === 'Select Categories' ||
      questionCount === 'Number of Questions' ||
      difficulty === 'Select Difficulty'
    ) {
      throw new Error('Please Select value');
    } else {
      dispatch(actions.getQuestions(category, questionCount, difficulty));
      setShowComponent(true);
    }
  };

  const onSelectHandler = (e) => {
    if (
      e.target.value === 'Select Categories' ||
      e.target.value === 'Number of Questions' ||
      e.target.value === 'Select Difficulty'
    ) {
      throw new Error('Please Select value');
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      {showComponent ? (
        <Gameboard />
      ) : categories.length > 0 ? (
        <form onSubmit={onSubmitHandler}>
          <SelectLoader onChange={onSelectHandler} name="category">
            <option value="" disabled selected>
              Select Categories
            </option>
            {categories.map((item) => (
              <option key={item.CategoryId} value={item.CategoryId}>
                {item.label}
              </option>
            ))}
          </SelectLoader>

          <SelectLoader onChange={onSelectHandler} name="questionCount">
            <option value="" disabled selected>
              Number of Questions
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </SelectLoader>

          <SelectLoader onChange={onSelectHandler} name="difficulty">
            <option value="" disabled selected>
              Select Difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </SelectLoader>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      ) : (
        <LoaderDiv>
          <Loader type="Oval" color="#C49A68" height={100} width={100} />
        </LoaderDiv>
      )}
    </div>
  );
};

export default Startup;
