// if react then import redux from 'redux'
// but its a js so
const redux = require("redux");
const createStore = redux.createStore;

const reducerInitialState = { cake: 10 };
const actionObject = {};
function actionFunction() {
  return {
    type: "eating",
    abcd: "a",
  };
}
const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {
    case "eating":
      return {
        ...state,
        cake: state.cake - 1,
      };

    default: {
      return state;
    }
  }
};
const store = createStore(reducer);
console.log("current", store.getState());
const unsuscribe = store.subscribe(() => console.log(store.getState())); //updated state
console.log("redux");
store.dispatch({ type: "eating" }); //inside provide action type
console.log("current", store.getState());
store.dispatch({ type: "eating" }); //inside provide action type
console.log("current", store.getState());
store.dispatch({ type: "eating" }); //inside provide action type
console.log("current", store.getState());

// unsuscribe();
// unsuscribe();
