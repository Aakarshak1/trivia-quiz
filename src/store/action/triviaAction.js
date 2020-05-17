import * as actionTypes from './actionTypes';

export const getCategories = () => {
  return {
    type: actionTypes.GET_CATEGORIES,
  };
};

export const setCategories = (res) => {
  return {
    type: actionTypes.SET_CATEGORIES,
    payload: res,
  };
};

export const getQuestions = (category, questionCount, difficulty) => {
  return {
    type: actionTypes.GET_QUESTIONS,
    category: category,
    questionCount: questionCount,
    difficulty: difficulty,
  };
};

export const setQuestions = (response) => {
  return {
    type: actionTypes.SET_QUESTIONS,
    payload: response,
  };
};

export const nextQuestion = () => {
  return {
    type: actionTypes.NEXT_QUESTION,
  };
};
