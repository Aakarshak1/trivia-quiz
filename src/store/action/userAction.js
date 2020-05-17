import * as actionTypes from './actionTypes';

export const getScore = () => {
  return {
    type: actionTypes.GET_SCORE,
  };
};

export const addScore = () => {
  return {
    type: actionTypes.ADD_SCORE,
  };
};
