import React, { useState, useTransition } from "react";

function UseTransition() {
  const [flag, setting] = useTransition({ delay: 100000000 });
  const [display, setDisplay] = useState(true);
  //   by default flag is true
  const [state, setState] = useState("");

  const handleClick = () => {
    setDisplay(flag);
    setting(() => {
      setState("Payment Complete");
    });
  };
  return (
    <div>
      <button onClick={() => handleClick()}>Click to pay</button>
      {/* {flag ? "Payment Processing... " : <span>{state}</span>} */}
      {display && 'Payment Processing... "'}
      {!display && <span>{state}</span>}
    </div>
  );
}

export default UseTransition;
