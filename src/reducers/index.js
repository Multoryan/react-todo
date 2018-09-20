import { combineReducers } from 'redux'
import { todos } from './todos'

// Главный reducer, примерно тоже, что и index.js во Vuex,
// собирает модули воедино
export const rootReducer = combineReducers({
  todos
})