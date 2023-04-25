import React, { useState } from "react";
import Button from "./Button";

function DisplayPage() {
  const [showPara, setShowPara] = useState(false);
  const clickHandler = (h) => {
    console.log(h);
    setShowPara((prevState) => !prevState);
  };
  console.log("display runned");
  return (
    <div>
      <h>This is H</h>
      {showPara && <p>this is tggling para</p>}
      <Button meraProp={clickHandler} />
    </div>
  );
}

export default DisplayPage;
