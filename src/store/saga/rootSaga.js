import { all, takeEvery, take, fork } from 'redux-saga/effects';

import * as actionTypes from '../action/actionTypes';
import { initCategoriesSaga, initQuestionsSaga } from './triviaSaga';

export function* watchTrivia() {
  yield fork(initCategoriesSaga);
  // yield takeEvery(actionTypes.GET_CATEGORIES, initCategoriesSaga);
  yield takeEvery(actionTypes.GET_QUESTIONS, initQuestionsSaga);
}
