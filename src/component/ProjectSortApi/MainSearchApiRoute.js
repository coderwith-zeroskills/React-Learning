import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainSearchApi from "./MainSearchApi";
import Cart from "./Cart";

function MainSearchApiRoute() {
  const [addedList, setAddedList] = useState([]);
  const [cartCount, setCartCount] = useState(addedList?.length);

  const handleCartCountChange = (count, name, price) => {
    console.log(count, name, price);
    setCartCount(count);
    setAddedList([
      ...addedList,
      {
        name: name,
        price: price,
      },
    ]);
  };
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: "block" }}>
          {" "}
          <Link to="">Home</Link>
          <Link to="/cart" style={{ padding: 10 }}>
            {" "}
            Cart-{cartCount}
          </Link>
        </div>

        <Routes>
          <Route
            path=""
            element={
              <MainSearchApi
                onCartCountChange={handleCartCountChange}
                listlen={addedList.length}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartCount={cartCount} addedList={addedList} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainSearchApiRoute;
