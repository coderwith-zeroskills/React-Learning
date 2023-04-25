// how to make api calls when working with redux
//npm install redux-thunk
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const user = {
  loading: true,
  users: [],
  error: "",
};
// "FETCH_USERS_REQUEST"
// "FETCH_USERS_SUCCESS"
// "FETCH_USERS_FAILURE"
const fetchuserrequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};
const fetchusersuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const fetchuserfailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

const reducer = (state = user, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };

    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload, error: "" };
    case "FETCH_USERS_FAILURE":
      return state;
    // default:
    //   return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};
// insdide functions is not necessary to be pure
const fetUsers = () => {
  return function (dispatch) {
    dispatch(fetchuserrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the array of usera
        const data = response.data.map((i) => i.id);
        dispatch(fetchusersuccess(data));
      })
      .catch((err) => {
        // error.message is error description
        dispatch(fetchuserfailure(err.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetUsers());
