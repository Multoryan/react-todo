import React, { Component } from 'react';
import PageTodos from '../containers/PageTodos'
import PageAddTodos from '../containers/PageAddTodos'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ PageTodos }/>
          <Route exact path="/add" component={ PageAddTodos }/>
        </div>
      </Router>
    );
  }
}

export default App
