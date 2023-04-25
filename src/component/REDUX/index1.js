// if react then import redux from 'redux'
// but its a js so
const redux = require("redux");
const combinedStore = redux.combineReducers;
const createStore = redux.createStore;

const cakeInitialState = { cake: 10 };
const iceCreamInitialState = { iceCream: 10 };

// const actionObject = {};
// function cakeAction() {
//   return {
//     type: "eating",
//     abcd: "a",
//   };
// }
// function iceCreamAction() {
//   return {
//     type: "eating",
//     abcd: "a",
//   };
// }
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "eatingCake":
      return {
        ...state,
        cake: state.cake - 1,
      };

    default: {
      return state;
    }
  }
};
const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case "eatingIce":
      return {
        ...state,
        iceCream: state.iceCream - 1,
      };

    default: {
      return state;
    }
  }
};
//accepts key-value pair
const storeCombined = combinedStore({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(storeCombined);
console.log(store.getState());
// store.dispatch({ type: "eating" });
store.dispatch({ type: "eatingCake" });
console.log(store.getState());
