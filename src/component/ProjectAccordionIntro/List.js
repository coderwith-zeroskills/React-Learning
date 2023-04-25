import React, { useState } from "react";
import Background from "./Background";
import "./List.css";
import { useEffect } from "react";

function List(props) {
  const [display, setDisplay] = useState(false);
  const clickHandler = () => {
    setDisplay(!display);
  };

  return (
    <div class="list">
      <h>{props.title}</h>
      <button class="button" onClick={clickHandler}>
        +
      </button>
      <p>{display && props.content}</p>{" "}
    </div>
  );
}

export default List;
