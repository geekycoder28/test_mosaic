import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { notification } from 'antd'

import {
  LIST_NEWS,
  listNewsRequestSuccess,
  listNewsRequestFail,
} from './actions'

import { API_KEY } from 'config'
import { getHeaders, getErrorMessage } from 'utils/auth-helpers'

export function* listNewsRequestHandler({ payload }) {
  const params = {
    url: '/v2/everything/',
    method: 'get',
    headers: getHeaders(),
    params: {
      page: payload.page,
      pageSize: 10,
      q: payload.search || 'bitcoin',
      sortBy: 'publishedAt',
      apiKey: API_KEY,
    },
  }
  try {
    const res = yield call(axios.request, params)
    yield put(listNewsRequestSuccess(res.data))
  } catch (err) {
    const res = listNewsRequestFail(getErrorMessage(err.response))
    yield put(res)
    notification.open({
      message: 'Error Found',
      description: res.payload,
    })
  }
}

export default function* recordSaga() {
  yield takeLatest(LIST_NEWS, listNewsRequestHandler)
}
