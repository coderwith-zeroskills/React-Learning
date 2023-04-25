import React, { useState } from "react";

function PreviousStateCounter() {
  const [count, setCounter] = useState(0);
  function fun() {
    for (let i = 0; i < 5; i++)
      setCounter((last) => {
        // console.log(last);
        return last + 1;
      });
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCounter(count - 1)}>
        DECREMENT {console.log(count)}
      </button>
      <button onClick={() => setCounter(0)}>RESET</button>
      <button onClick={() => setCounter(count + 1)}>INCREMENT</button>
      <button onClick={fun}>+5</button>
    </div>
  );
}

export default PreviousStateCounter;
