// if react then import redux from 'redux'
// but its a js so
//middleware:provide a third party extension point between dispatching a action and the momment it reaches the reducer
//can use for logging crashing report,perfoming asynchoning
// the middleware here we will be using is :redux-logger"
// npm install redux-logger
// we will need logger so will import it :createLogger method
const redux = require("redux");
const reduxLogger = require("redux-logger");
//untill now synchorous action like cake actin called immedialtely state is updated now async
// state{
//     loading:true,
//     data:[];
//     error:'error';
// }
// action:{}

const combinedStore = redux.combineReducers;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;

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
const store = createStore(storeCombined, applyMiddleWare(logger));
// const unsubscribe = store.subscribe(() => {
//   console.log("updatedState", store.getState());
// });
const unsubscribe = store.subscribe(() => {});
console.log(store.getState());
// store.dispatch({ type: "eating" });
store.dispatch({ type: "eatingCake" });
// console.log(store.getState());
unsubscribe();
