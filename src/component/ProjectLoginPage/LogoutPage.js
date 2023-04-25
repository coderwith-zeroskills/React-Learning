import React, { useState } from "react";
import "./LoginPage.css";

function LogoutPage(props) {
  const LogoutpageHandler = () => {
    props.LoginpageHandler(false);
  };
  return (
    <>
      <div class="container">
        <h1>WELCOME USER</h1>
      </div>
      <div>
        <input type="button" onClick={LogoutpageHandler} value="Logout" />
      </div>
    </>
  );
}

export default LogoutPage;
