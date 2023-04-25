import React, { useState } from "react";

function UseStateObject() {
  const myObj = {
    name: "",
    number: "",
    date: "",
  };
  const [person, setPerson] = useState(myObj);
  const nameChangeHandler = (event) => {
    setPerson((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const numberChangeHandler = (event) => {
    setPerson((prevState) => {
      return { ...prevState, number: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setPerson((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  // console.log(person);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(person);
    setPerson(myObj);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name </label>
        <input
          type="text"
          value={person.name}
          onChange={nameChangeHandler}
        ></input>
        <br></br>
        <label>Phone-Number </label>
        <input
          type="number"
          value={person.number}
          onChange={numberChangeHandler}
        ></input>
        <br></br>
        <label>Date-of-Birth </label>
        <input
          type="date"
          value={person.date}
          onChange={dateChangeHandler}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default UseStateObject;
