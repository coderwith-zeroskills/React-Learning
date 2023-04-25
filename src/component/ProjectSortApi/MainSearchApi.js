// import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function MainSearchApi({ onCartCountChange, listlen }) {
  // const c = React.createContext();
  const [products, setProducts] = useState([]);
  const [intermediate, setIntermediate] = useState([]);
  const [typed, setTyped] = useState();
  const [cartCount, setCartCount] = useState(listlen);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
          setIntermediate(response.data);
          setLoading(false);
        }

        // console.log(products);
      })
      .catch((error) => {
        return console.log(error);
      });
    console.log("running");
  }, []);
  const cartClickHandler = (a, b) => {
    setCartCount((prevCount) => prevCount + 1);
    onCartCountChange(cartCount + 1, a, b);
  };
  const productList = products.map((product) => (
    <li key={product.id}>
      <b> {product.title}</b>:{" "}
      <span style={{ backgroundColor: "rosybrown" }}>
        Price{product.price}$
      </span>
      <button style={{ margin: "5px" }}>MORE DEATILS</button>
      <button
        style={{ margin: "5px" }}
        onClick={() => cartClickHandler(product.title, product.price)}
      >
        Add to Cart
      </button>
    </li>
  ));
  function clickHandler1() {
    const array = [...products];
    array.sort((a, b) => a.price - b.price);
    setProducts(array);
  }
  const clickHandler2 = () => {
    const array = [...products];
    array.sort((a, b) => b.price - a.price);
    setProducts(array);
  };
  const changeHandler = (event) => {
    setTyped(event.target.value.toLowerCase());
    // console.log(event.target.value);
    // let array = [...products];
    let filteredProducts = intermediate.filter((product) => {
      return product.title.toLowerCase().includes(typed);
      //how to ignore upper and lower case
    });
    setProducts(filteredProducts);
  };
  return (
    <>
      {/* {cartCount} */}
      {/* <c.Provider value={cartCount}><Cart /></c.Provider> */}
      {/* <Cart count={cartCount} /> */}
      {/* <BridgeBtnHomeAndCart count={cartCount} /> */}
      <button onClick={() => clickHandler1()} style={{ margin: "10px" }}>
        SORT BY PRICE LOW to HIGH
      </button>
      <button onClick={() => clickHandler2()} style={{ margin: "10px" }}>
        SORT BY PRICE HIGH to LOW
      </button>
      <br></br>
      {/* below onChange is not running by ()=> and too bu changeHandler() */}
      {/* search button */}
      <input
        type="text"
        placeholder="Search"
        onChange={changeHandler}
        style={{ margin: "10px" }}
      ></input>
      {loading ? (
        <p style={{ textAlign: "center", backgroundColor: "red" }}>loading..</p>
      ) : (
        <ul>{productList}</ul>
      )}
    </>
  );
}

export default MainSearchApi;
