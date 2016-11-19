
import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, text: 'Learn JS', completed: true },
                { id: 2, text: 'Learn React', completed: true },
                {id: 3, text: 'Learn Flux/Redux', completed: false }
            ]
        };

          //---------------------------------------------------------

        // ADD_TODO
        
        this.actions = {};
        let self = this;
        this.actions.addTodo = function(text) {
            self.setState({
                todos: [{id:Math.random(),text,completed:false},...self.state.todos]
            });
        }

        // EDIT_TODO

        // DELETE_TODO

        // COMPLETE_TODO

        // COMPLETE_ALL

        // CLEAR_COMPLETED


        //---------------------------------------------------------

        
    }

    render() {
        
        let {todos} = this.state;
        let {actions} = this;

        return (
            <div>
                <Header {...actions}/>
                <TodoList todos={todos}/>
            </div>
        );
    }

}