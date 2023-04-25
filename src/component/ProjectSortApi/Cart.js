import { useState } from "react";

function Cart({ cartCount, addedList }) {
  let x = 0;
  const [flag, setFlag] = useState(false);
  //   console.log(addedList);
  addedList.map((v) => {
    return (x += v.price);
  });
  const clickHandler = (name) => {
    setFlag(!flag);
    console.log(name);

    let a = addedList.filter((p) => name !== p.name);
    addedList = [...a];
  };
  const print = addedList.map((v, i) => {
    return (
      <li key={i}>
        {v.name}-{v.price}
        <button style={{ margin: "5px" }} onClick={() => clickHandler(v.name)}>
          Remove
        </button>
      </li>
    );
  });

  return (
    <>
      Total Items:{cartCount}
      <ul>{print}</ul>
      <p style={{ backgroundColor: "rosybrown" }}>Total Price:{x}$</p>
    </>
  );
}
//changes
export default Cart;
