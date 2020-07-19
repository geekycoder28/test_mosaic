import { all } from 'redux-saga/effects'

import newsSagas from './news/sagas'

export default function* rootSaga() {
  yield all([newsSagas()])
}
