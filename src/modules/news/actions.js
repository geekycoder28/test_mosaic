import { createAction } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

/**
 * Constants
 */

export const LIST_NEWS = 'LIST_NEWS'
export const GET_SOURCES = 'GET_SOURCES'
export const REORDER = 'REORDER'

/**
 * Actions
 */

export const listNewsRequest = createAction(LIST_NEWS)
export const listNewsRequestSuccess = createAction(successAction(LIST_NEWS))
export const listNewsRequestFail = createAction(failAction(LIST_NEWS))

export const getSourcesRequest = createAction(GET_SOURCES)
export const getSourcesSuccess = createAction(successAction(GET_SOURCES))
export const getSourcesFail = createAction(failAction(GET_SOURCES))

export const reorderRequest = createAction(REORDER)
