const redux = require('redux')
const createStore = redux.createStore

//Intial state
const intialState = {
  counter: 0
}

//Reducer
const roorReducer = (state = intialState, action) => {
    if (action.type == "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type == "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};


//Store
const store = createStore(roorReducer);
console.log(store.getState())

//subscription

store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

//Despacting action
store.dispatch({type:"INC_COUNTER"})
store.dispatch({type:"ADD_COUNTER", value:10})
console.log(store.getState())

