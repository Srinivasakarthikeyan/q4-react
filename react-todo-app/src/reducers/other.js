
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/ActionTypes'



export default function todos(state = {}, action) {

    switch (action.type) {
        case ADD_TODO:
            console.log('other-reducer : ADD_TODO');
            return state;
        default:
           return state;    
    }


}