import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./ToDoForm.css";
// import "./MY-APP/;

function ToDoForm(props) {
  const [enterdNote, setEnteredNote] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [id, setId] = useState(undefined);
  const changeHandler = (event) => {
    setEnteredNote(event.target.value);
    setId(Math.floor(Math.random() * 1000 + 1));
  };
  const clickHandler = () => {
    if (enterdNote !== "") {
      setIsValid(true);
      const notes = {
        note: enterdNote,
        noteId: id,
      };
      // props.enteredNote(notes);
      setEnteredNote("");
      setId(undefined);
    } else {
      setIsValid(false);
    }
  };
  return (
    <>
      <div id="containerForm">
        <div id="input-area">
          <input
            type="text"
            onChange={changeHandler}
            placeholder="enter note"
            value={enterdNote}
          />
        </div>
        <div id="add-btn">
          <button onClick={clickHandler}>ADD</button>
        </div>
      </div>
    </>
  );
}

export default ToDoForm;
