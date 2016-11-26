



import store from './store';
import * as actions from './actions';


// let unSubcribe=store.subscribe(function() { 
//     console.dir(store.getState().todos);
// });


// synchronous 

// store.dispatch(actions.addTodo('Learn Redux'));
// store.dispatch(actions.editTodo(1, 'Learn Redux _ Adv'));
// store.dispatch(actions.completeTodo(1));
// store.dispatch(actions.deleteTodo(1));
// store.dispatch(actions.completeAll());
// store.dispatch(actions.clearCompleted());


// asynchnous

// 

store.dispatch(actions.loadTodos());



