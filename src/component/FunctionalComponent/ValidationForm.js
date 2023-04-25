import React, { useState, useEffect } from "react";

function ValidationForm() {
  const [person, setPerson] = useState({});
  const fun = (event) => {
    setPerson({ fname: event.target.value });
  };
  const validate = () => {
    <Check person={person} />;
  };
  useEffect(() => {
    document.title = person.fname;
  });

  return (
    <>
      <form onSubmit={validate}>
        <label for="fname">First-Name:</label>
        <input type="text" id="fname" onChange={fun}></input>
        {/* <p>{person.fname}</p> */}
        <input type="submit"></input>
      </form>
    </>
  );
}
function Check(props) {
  return <div></div>;
}

export default ValidationForm;
