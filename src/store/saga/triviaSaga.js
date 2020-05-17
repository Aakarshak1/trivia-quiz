import { put } from 'redux-saga/effects';

import axios from '../../Utility/axios-custome';
import * as actions from '../action/rootAction';

export function* initCategoriesSaga() {
  yield put(actions.getCategories());
  try {
    const response = yield axios.get('https://opentdb.com/api_category.php');
    const categories = [];
    [...response.data.trivia_categories].forEach((item) =>
      categories.push({
        label: item.name,
        CategoryId: item.id,
      })
    );
    yield put(actions.setCategories(categories));
  } catch (error) {
    console.log(error);
  }
}

export function* initQuestionsSaga(action) {
  try {
    const url = `https://opentdb.com/api.php?amount=${action.questionCount}&category=${action.category}&difficulty=${action.difficulty}&type=multiple`;
    const response = yield axios.get(url, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });

    const Questions = [];
    [...response.data.results].forEach((item) => {
      Questions.push({
        Question: item.question,
        correct_answer: item.correct_answer,
        answers: [...item.incorrect_answers, item.correct_answer],
      });
    });
    yield put(actions.setQuestions(Questions));
  } catch (error) {
    console.log(error);
  }
}
