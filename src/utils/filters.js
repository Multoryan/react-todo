export const filters = [
  { 
    id: 1,
    title: 'Не завершенные',
    filterFunc: todo => !todo.isComplete
  },
  { 
    id: 2,
    title: 'Завершенные',
    filterFunc: todo => todo.isComplete
  },
  { 
    id: 3,
    title: 'Все',
    filterFunc: todo => todo
  },
  { 
    id: 4,
    title: 'С указанной датой',
    filterFunc: todo => todo.date
  },
  { 
    id: 5,
    title: 'Без привязки к дате',
    filterFunc: todo => !todo.date
  },
  { 
    id: 6,
    title: 'Просроченные',
    filterFunc: todo => todo.date && !todo.isComplete && (new Date(todo.date) < new Date())
  }
]