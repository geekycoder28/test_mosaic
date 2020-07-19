import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import newsReducer from './news/reducers'

const rootReducer = combineReducers({
  form,
  news: newsReducer,
})

export default rootReducer
