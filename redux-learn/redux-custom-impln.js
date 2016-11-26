



// redux - custom impln
 

/*
    e.g. counter-app

     actions

     a. INCREMENT
     b. DECREMENT

     {type:'INCREMENT',value:1}
     {type:'DECREMENT',value:1}

*/


function reducer(state,action) {
    
    switch (action.type){
        
        case 'INCREMENT':
            return state + action.value;
        case 'DECREMENT':
            return state - action.value;
        default:
            return state;
            
    }

}


function createStore(reducer) {

    var state = 0; // state

    var listeners = [];

    return{
        disptach: function (action) {
            var newState = reducer(state, action);
            if (state !== newState) {
                state = newState;
                listeners.forEach(function (listener) {
                    listener(state);
                 });
            }
        },
        getState: function () {
            return state;
        },
        subscribe: function (func) {
            listeners.push(func);
        }
    }

}


//-----------------------------------------------

// View


var store = createStore(reducer);


store.subscribe(function (newState) {
    console.log("Count:"+newState);
});
 

store.disptach({ type: 'INCREMENT', value: 1 });
store.disptach({ type: 'INCREMENT', value: 10 });

console.log(store.getState());