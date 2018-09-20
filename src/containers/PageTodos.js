import React from 'react'
import { connect } from 'react-redux'
import { removeTodo, changeTodo, changeFilter } from '../actions/todosActions'
import { TodoView } from '../components/TodoView'
import { TodoFilters } from '../components/TodoFilters'
import { filters } from '../utils/filters'
import { Link } from 'react-router-dom'

class PageTodos extends React.Component {
  
  render() {
    const { removeTodo, changeTodo, todos, changeFilter, currentFilter } = this.props

    // Фильтрация
    const needFilter = filters.find(filter => filter.id === currentFilter)
    let todosGetter = todos.filter(todo => needFilter.filterFunc(todo))

    // Сортировка
    todosGetter = todosGetter.sort((prev, next) => new Date(prev.date || 0) - new Date(next.date || 0))
    
    return (
      <div className="ui grid container">
          <div className="ten column centered row">
            <TodoFilters
              filter={ currentFilter }
              list={ filters }
              changeFilters={ changeFilter }
            />
          </div>
          <div className="ten column centered row">
            <TodoView
              todos={ todosGetter }
              changeTodo={ changeTodo }
              removeTodo={ removeTodo }
            />
          </div>
          <div className="ten column centered row">
            <Link to="/add">Добавить</Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  todos: store.todos.todos,
  currentFilter: store.todos.currentFilter,
})

const mapStateToActions = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  changeTodo: todo => dispatch(changeTodo(todo)),
  changeFilter: id => dispatch(changeFilter(id))
})

export default connect(mapStateToProps, mapStateToActions)(PageTodos)