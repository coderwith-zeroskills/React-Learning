import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import React, { useEffect, useState } from "react";

function MainSortApi() {
  const [products, setProducts] = useState([]);
  const [intermediate, setIntermediate] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
          setIntermediate(response.data);
        }
        // console.log(products);
      })
      .catch((error) => console.log(error));
    console.log("running");
  }, []);
  const productList = products.map((product) => (
    <li key={product.id}>
      <b> {product.title}</b>:{" "}
      <span style={{ backgroundColor: "rosybrown" }}>
        Price{product.price}$
      </span>
      <button style={{ margin: "5px" }}>MORE DEATILS</button>
    </li>
  ));
  //   console.log(products);
  const clickHandler1 = () => {
    const array = [...products];
    array.sort((a, b) => a.price - b.price);
    setProducts(array);
  };
  const clickHandler2 = () => {
    const array = [...products];
    array.sort((a, b) => b.price - a.price);
    setProducts(array);
  };
  const changeHandler = (event) => {
    const typed = event.target.value.toLowerCase();
    if (typed === "") {
      setProducts(intermediate);
    }

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
      <ul>{productList}</ul>
    </>
  );
}

export default MainSortApi;
