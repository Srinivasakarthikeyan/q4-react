import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput'

class Header extends Component {

    handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput
                    onSave={this.handleSave.bind(this)}
                    />
            </header>    
        );
    }
}

export default Header;