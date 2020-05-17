import * as actionTypes from '../action/actionTypes';

const initialState = {
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case actionTypes.GET_SCORE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
