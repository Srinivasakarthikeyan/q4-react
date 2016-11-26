import * as types from '../constants/ActionTypes'

import fetch from 'isomorphic-fetch';

const api = "http://localhost:3000/api/todos";

export function addTodo(text) {

    //return { type: types.ADD_TODO, text }

    return function (dispatch, state) {

        fetch(api, {
            method: 'post',
            body: JSON.stringify({ text, completed: false }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(function (resp) {
            return resp.json();
        }).then(function (todo) {
            dispatch({ type: types.ADD_TODO, todo });
        })


    }

}


export function loadAllTodos() {

    return function (dispatch, state) {

        fetch(api, {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function (resp) {
            return resp.json();
        }).then(function (todos) {
            dispatch({ type: types.LOAD_ALL_TODOS, todos });
        })

    }

}


export function deleteTodo(id) {

    return function (dispatch, state) {
        //dispatch({type:'DELETE_START'});        
        fetch(api + "/" + id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function (resp) {
            return resp.json();
        }).then(function (todo) {
            // dispatch({type:'DELETE_SUCCESS'});
            dispatch({ type: types.DELETE_TODO, id });
        }, function (err) {
            // dispatch({type:'DELETE_FAILED'});
        })
    }

}



export function editTodo(id, text) {
    return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
    return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
    return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
    return { type: types.CLEAR_COMPLETED }
}
