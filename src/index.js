import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./Routes/About";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="flex gap-2">
        <span className="btn">
          <Link to="/">App</Link>
        </span>
        <span className="btn">
          <Link to="About/1">About</Link>
        </span>
        <span className="btn">
          <Link to="/Home">Home</Link>
        </span>
      </div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <App />
    </Router>
  </React.StrictMode>
);
