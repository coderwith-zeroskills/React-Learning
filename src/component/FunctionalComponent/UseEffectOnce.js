import React, { useEffect, useState } from "react";

function UseEffectOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const move = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("h");
    window.addEventListener("mousemove", move);
    window.removeEventListener("mousemove", move);
  });

  return (
    <div>
      X:{x}
      Y:{y}
    </div>
  );
}

export default UseEffectOnce;
