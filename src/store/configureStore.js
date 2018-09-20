import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { save, load } from 'redux-localstorage-simple'

export const store = createStore(rootReducer, load(), applyMiddleware(logger, thunk, save()))