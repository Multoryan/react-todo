import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todosActions'
import { TodoAdd } from '../components/TodoAdd'
import { Link } from 'react-router-dom'

class PageAddTodos extends React.Component {

  addTodoWithRedirect = todo => {
    const { addTodo, history } = this.props

    addTodo(todo)
    history.goBack()
  }

  render() {
    
    return (
      <div className="eight column centered row">
        <TodoAdd
          addTodo={this.addTodoWithRedirect}
        />
        <div className="ten column centered row">
          <button className="ui button">
            <Link to="/">Назад</Link>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToActions = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
})

export default connect(null, mapStateToActions)(PageAddTodos)