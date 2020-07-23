import { handleActions } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

import { LIST_NEWS, REORDER, GET_SOURCES } from './actions'

const initialState = {
  sources: [],
  listNews: [],
  news: null,
  page: 1,
  pageSize: 10,
  totalResult: 0,
  loading: false,
  status: null,
  error: null,
}

export default handleActions(
  {
    [LIST_NEWS]: (state, { payload, type }) => ({
      ...state,
      listNews: null,
      news: null,
      page: payload.page,
      loading: true,
      status: type,
      error: null,
    }),
    [successAction(LIST_NEWS)]: (state, { payload, type }) => ({
      ...state,
      listNews: payload.articles,
      news: null,
      totalResults: payload.totalResults,
      params: payload.params,
      loading: false,
      status: type,
      error: null,
    }),
    [failAction(LIST_NEWS)]: (state, { payload, type }) => ({
      ...state,
      listNews: null,
      news: null,
      loading: false,
      status: type,
      error: payload,
    }),
    [successAction(GET_SOURCES)]: (state, { payload, type }) => ({
      ...state,
      sources: payload.sources,
    }),

    [REORDER]: (state, { payload, type }) => ({
      ...state,
      listNews: payload,
      news: null,
      loading: false,
      status: type,
      error: null,
    }),
  },
  initialState,
)
