import * as actionTypes from '../action/actionTypes';

const initialState = {
  categories: [],
  questions: [],
  questionCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
      };
    case actionTypes.GET_QUESTIONS:
      return {
        ...state,
        questionCount: action.questionCount,
      };
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case actionTypes.NEXT_QUESTION:
      let arr = [...state.questions];
      arr.shift();
      return {
        ...state,
        questions: arr,
      };
    default:
      return state;
  }
};

export default reducer;
