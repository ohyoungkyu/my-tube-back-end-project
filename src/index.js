import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Routes/About";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Join from "./Routes/Join";
import Login from "./Routes/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>        
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:id" element={<About />}></ Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
