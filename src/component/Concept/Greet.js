import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        {" "}
        hi my name is {props.name} and i am passing {props.pro} using react
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
