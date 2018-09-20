import React from 'react'
import PropTypes from 'prop-types'

export class TodoFilters extends React.Component {

  changeFilter = id => {
    this.props.changeFilters(id)
  }

  renderFilters = () => {

    return this.props.list.map(filter => {

      const isActive = this.props.filter === filter.id && 'active'

      return (
        <button key={filter.id}
                className={`ui button ${isActive || ''}`}
                onClick={(e) => this.changeFilter(filter.id)}>
          { filter.title }
        </button>
      )
    })
  }

  render() {
    return (
      <div className="ui buttons">
        { this.renderFilters() }
      </div>
    )
  }
}

TodoFilters.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  filter: PropTypes.number.isRequired
}
