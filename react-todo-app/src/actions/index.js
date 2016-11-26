
import { ADD_TODO, EDIT_TODO,DELETE_TODO,COMPLETE_TODO,COMPLETE_ALL,CLEAR_COMPLETED } from '../constants/ActionTypes';
import $ from 'jquery';


// Action Creators  ==> func who action objects


const api = "http://localhost:3000/api/todos";

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


export function loadTodos() {
    return function (dispatch) {
        $.get(api, function (todos) { 
            dispatch({type:'ALL_TODOS',todos});
        })
    }
}



export function addTodoWithAPI(text) {
    return function (dispatch) {
        $.post(api, {text,completed:false}, function (todo) { 
            dispatch(addTodo(todo.text));
        })
    }
}

