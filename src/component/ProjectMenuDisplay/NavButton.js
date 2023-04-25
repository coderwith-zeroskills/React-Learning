import React, { useState } from "react";
import Content from "./Content";

function NavButton(props) {
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState(0);
  const details = [
    [
      {
        id: 0,
        product: "tea",
        description: "hot",
      },
    ],
    [
      {
        id: 1,
        product: "thali",
        description: "with dal",
      },
    ],
  ];
  const clickHandler = (event) => {
    setDisplay(!display);
    setValue(event.target.id);
  };
  return (
    <div>
      {/* {console.log(key)} */}
      <input type="button" value={value} onClick={clickHandler} />
      {display && <Content passing={details[0]} />}
    </div>
  );
}

export default NavButton;
