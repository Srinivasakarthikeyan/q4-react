
import { ADD_TODO, EDIT_TODO,DELETE_TODO,COMPLETE_TODO,COMPLETE_ALL,CLEAR_COMPLETED } from '../constants/ActionTypes';
import $ from 'jquery';
// Action Creators  ==> func who action objects


export function addTodo(text) {
    return { type: ADD_TODO, text };
}

export function editTodo(id, text) {
    return { type: EDIT_TODO, text, id };
}

export function deleteTodo(id) {
    return { type: DELETE_TODO, id };
}

export function completeTodo(id) {
    return { type: COMPLETE_TODO, id };
}

export function completeAll() {
    return { type: COMPLETE_ALL };
}

export function clearCompleted() {
    return { type: CLEAR_COMPLETED };
}

export function initTodos(todos) {
    return { type: 'ALL_TODOS',todos };
}




//-------------------------------------


export function loadTodos(){
    return function (dispatch) {
        $.get('http://0.0.0.0:3000/api/todos', function (resp) { 
            dispatch(initTodos(resp));
        }, function(error) {
            
         });
    }
}

