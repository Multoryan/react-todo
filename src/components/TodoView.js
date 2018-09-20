import React from 'react'
import PropTypes from 'prop-types'

export class TodoView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editableId: null,
      oldValue: null,
      oldDate: null,
      newValue: null,
      newDate: null
    }
  }

  toggleComplete = (todo) => {
    const { changeTodo } = this.props
    
    changeTodo({
      ...todo,
      isComplete: !todo.isComplete
    })
  }

  remove = id => {
    const { removeTodo } = this.props

    removeTodo(id)
  }

  setEdit = todo => {
    this.setState({
      editableId: todo.id,
      oldValue: todo.title,
      oldDate: todo.date,
      newValue: todo.title,
      newDate: todo.date
    })
  }

  saveEdit = todo => {
    const { changeTodo } = this.props
    if (!this.state.newValue) {
      return null
    }
    changeTodo({
      ...todo,
      title: this.state.newValue,
      date: this.state.newDate
    })
    this.resetEdit()
  }

  resetEdit = () => {
    this.setState({
      editableId: null,
      oldValue: null,
      oldDate: null,
      newValue: null,
      newDate: null
    })
  }

  renderEditButtons = (todo) => {
    if (this.state.editableId === null) {
      return (
        <button onClick={(e) => this.setEdit(todo)}>Edit</button>
      )
    }
    if (todo.id === this.state.editableId) {
      return (
        <div>
          <button onClick={this.resetEdit}>Cancel</button>
          <button onClick={(e) => this.saveEdit(todo)}>Save</button>
        </div>
      )
    }
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  classFailed = todo => {
    if (todo.date && !todo.isComplete && (new Date(todo.date) < new Date())) {
      return 'todo--failed'
    }
  }

  generateList = () => {
    const { todos } = this.props

    const list = todos.map(todo => {

      const classFailed = todo.date && !todo.isComplete && (new Date(todo.date) < new Date()) && 'red'
      const isDisabled = this.state.editableId !== todo.id
      const valueDate = isDisabled ? todo.date : this.state.newDate
      const valueTitle = isDisabled ? todo.title : this.state.newValue

      return (
        <div key={ todo.id } className={`ui centered card ${classFailed || ''}`}>
          <div className="ui input">
            <input type="date"
                   disabled={ isDisabled }
                   value={ valueDate }
                   name="newDate"
                   onChange={(e) => this.change(e)}/>
          </div>
          <div className="ui input">
            <input type="text"
                   disabled={ isDisabled }
                   value={ valueTitle }
                   name="newValue"
                   onChange={(e) => this.change(e)}/>
          </div>
          <div className="ui input">
            <input type="checkbox"
                   checked={ todo.isComplete }
                   onChange={(e) => this.toggleComplete(todo, e)} />
          </div>
          <button onClick={(e) => this.remove(todo.id, e)}>X</button>
          { this.renderEditButtons(todo) }
        </div>
      )
    })

    return list.length ? list : 'Нет задач'
  }

  render() {
    return (
      <React.Fragment>
        { this.generateList() }
      </React.Fragment>
    )
  }

}

TodoView.propTypes = {
  todos: PropTypes.array.isRequired,
  changeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}