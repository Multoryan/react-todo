import React from 'react'
import PropTypes from 'prop-types'

export class TodoAdd extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      date: '',
      isRequiredMessage: ''
    }
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value,
      isRequiredMessage: ''
    })
  }

  sendForm = e => {

    e.preventDefault()

    // Запретить отправку пустой строки
    if (!this.state.value.trim()) {
      this.setState({
        isRequiredMessage: 'Вы забыли указать название задачи'
      })
      return null
    }

    // Добавление задачи и обнуление поля
    this.props.addTodo({
      title: this.state.value,
      date: this.state.date
    })
    this.setState({
      value: '',
      date: '',
      isRequiredMessage: ''
    })
  }

  render() {

    const errorClass = this.state.isRequiredMessage && 'error'

    return (
    <div className="ui grid">
      <div className="sixteen wide column">
        <form className={`ui form ${errorClass}`}
              onSubmit={this.sendForm}>
          <div className="field">
            <label>Дата</label>
            <input type="date" name="date" value={this.state.date} onChange={this.updateField}/>
          </div>
          <div className={`field ${errorClass || ''}`}>
            <label>Название</label>
            <input type="text" name="value" value={this.state.value} onChange={this.updateField} />
          </div>
          <div className="ui error message">
            { this.state.isRequiredMessage }
          </div>
          <button className="ui button" type="submit">Добавить</button>
        </form>
      </div>
    </div>
    )
  }
}

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired
}