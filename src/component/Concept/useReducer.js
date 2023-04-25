import React from "react";
import { useReducer } from "react";

function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "inputName":
        return { ...state, name: action.payload };
      case "inputAge":
        return { ...state, age: action.payload };
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, { name: "", age: undefined });
  const clickHandler = () => {
    console.log("d");
    console.log(state);
  };
  return (
    <div>
      <p>
        {state.name}-{state.age}
      </p>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "inputName", payload: e.target.value })
        }
      />
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "inputAge", payload: e.target.value })
        }
      />
      {/* working on a click */}
      <button onClick={clickHandler}>Submit</button>
      {/* working without click */}
      {/* <button onClick={clickHandler()}>Submit</button> */}
      {/* no workinh */}
      {/* <button onClick={() => clickHandler}>Submit</button> */}
    </div>
  );
}

export default UseReducer;
