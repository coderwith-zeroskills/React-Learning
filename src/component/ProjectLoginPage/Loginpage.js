import React, { useEffect, useState } from "react";
import "./LoginPage.css";

function Loginpage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const emailHandler = (event) => {
    setEmail(event.target.value);
    // if (email.includes("s")) console.log("t");
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    // setValid(email.includes("@") && password.trim().length > 7);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.LoginpageHandler(true);
  };
  useEffect(() => {
    if (email.includes("@") && password.trim().length > 6) setValid(false);
  }, [email, password]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div id="text-area">
            <label>Enter Email:</label>
            <input type="text" onChange={emailHandler}></input>
          </div>
          <div id="password-area">
            <label>Enter password:</label>
            <input type="password" onChange={passwordHandler}></input>
          </div>
          <input type="submit" value="Login" disabled={valid}></input>
        </div>
      </form>
    </>
  );
}

export default Loginpage;
