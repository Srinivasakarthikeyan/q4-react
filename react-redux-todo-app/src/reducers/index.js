import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos
})

export default rootReducer




// commonJS

// var combineReducers = require('redux').combineReducers;
// var todos = require('.todos');

// const rootReducer = combineReducers({
//   todos
// })

// module.export = rootReducer;




// AMD

// define('index', ['redux', 'todos'], function () { 
//   //
//   return module;
// });