import React from "react";

function Button(props) {
  const h = "h";
  const fun = () => {
    props.meraProp(h);
  };
  console.log("button rn");
  return (
    <div>
      <button onClick={fun}></button>
    </div>
  );
}

export default Button;
