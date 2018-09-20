export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const CHANGE_FILTER = 'CHANGE_FILTER'

// Действие добавления нового дела
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

// Удаление дела
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

// Изменение дела
export function changeTodo(todo) {
  return {
    type: CHANGE_TODO,
    todo
  }
}

// Изменение фильтра
export function changeFilter(id) {
  return {
    type: CHANGE_FILTER,
    id
  }
}