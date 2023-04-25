import React from "react";
import "./Content.css";

function Button(props) {
  return (
    <div>
      <button value={props.value} onClick={props.index}>
        {props.value}
      </button>
    </div>
  );
}

export default Button;
