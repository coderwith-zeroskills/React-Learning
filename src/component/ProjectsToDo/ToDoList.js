import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  const deleteCall = (event) => {
    props.ondelete(event.target.id);
  };
  return (
    <div id="container">
      <div>
        <p>{props.note}</p>
      </div>
      <div>
        <input type="checkbox" />
        <input
          type="button"
          value="Delete"
          id={props.id}
          onClick={deleteCall}
        />
      </div>
    </div>
  );
}

export default ToDoList;
