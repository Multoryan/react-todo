import { ADD_TODO, REMOVE_TODO, CHANGE_TODO, CHANGE_FILTER } from '../actions/todosActions'

const initialState = {
  todos: [],
  currentFilter: 3,
}

function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

export function todos(state = initialState, action) {
  switch (action.type) {

    // Добавление нового дела
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [{
          date: action.todo.date,
          title: action.todo.title,
          isComplete: false,
          id: getId(state)
        }, ...state.todos]
      })

    // Удаление дела
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id)
      })

    // Изменение дела
    case CHANGE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => todo.id === action.todo.id ? action.todo : todo)
      })

    // Изменение фильтра
    case CHANGE_FILTER:
      return {...state, currentFilter: action.id}

    default: return state
  }
}
