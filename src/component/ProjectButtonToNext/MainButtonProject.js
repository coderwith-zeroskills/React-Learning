import React, { useEffect, useState } from "react";
import Button from "./Button";
import Content from "./Content";
import axios from "axios";
import "./Content.css";
//PROJECT-7 of Code 15 React Projects - Complete Course freecodecamp

function MainButtonProject() {
  const [onOf, setOnOf] = useState(false);
  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response.data);
        setArr(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  // console.log(arr);
  const previousHandler = () => {
    if (index === 0) {
      setIndex(arr.length - 1);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };
  const nextHandler = () => {
    if (index === arr.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };
  const setHandler = () => {
    setOnOf(true);
  };
  return (
    <div className="main-container">
      <div className="wrap">
        <div className="previous-btn">
          {onOf && <Button value="previous" index={previousHandler} />}
        </div>
        <Content arr={arr} index={index} onSet={setHandler} />
        <div className="next-btn">
          {onOf && <Button value="next" index={nextHandler} />}
        </div>
      </div>
    </div>
  );
}

export default MainButtonProject;
