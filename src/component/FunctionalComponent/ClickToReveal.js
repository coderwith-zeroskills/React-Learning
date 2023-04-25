import React, { useState } from "react";

function ClickToReveal() {
  const [text, setText] = useState("");
  function fun() {
    // if ({text} === "")
    if (text === "") {
      setText("Hi I am Revealed");
    } else {
      setText("");
    }
  }
  return (
    <>
      <button onClick={fun}>Click to reveal text</button>
      <button onClick={fun}>Click to hide text</button>
      <p>{text}</p>
    </>
  );
}

export default ClickToReveal;
