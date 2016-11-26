import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import * as TodoActions from '../actions'

class App extends Component {

  componentDidMount() {
    let {actions} = this.props;
    actions.loadAllTodos(); // Network..
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <TodoList todos={todos} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
