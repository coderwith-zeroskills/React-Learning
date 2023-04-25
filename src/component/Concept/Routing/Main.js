import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/service">Service</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
