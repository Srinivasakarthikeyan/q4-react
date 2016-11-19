import React, { Component,PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer'

class TodoList extends Component {

    render() {
        
        let {todos} = this.props;

        let todoItems = todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} />
        );
        
        return (
            <section className="main">
                <ul className="todo-list">
                    {todoItems}
                </ul>
                <Footer />
            </section>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}


export default TodoList;