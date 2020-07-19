import { createAction } from 'redux-actions'

import { successAction, failAction } from 'utils/state-helpers'

/**
 * Constants
 */

export const LIST_NEWS = 'LIST_NEWS'
export const REORDER = 'REORDER'

/**
 * Actions
 */

export const listNewsRequest = createAction(LIST_NEWS)
export const listNewsRequestSuccess = createAction(successAction(LIST_NEWS))
export const listNewsRequestFail = createAction(failAction(LIST_NEWS))

export const reorderRequest = createAction(REORDER)
