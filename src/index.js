import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Routes/About";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Join from "./Routes/Join";
import Login from "./Routes/Login";
import { RecoilRoot } from "recoil";
import UserDetail from "./Routes/users/UserDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/users/:id" element={<UserDetail />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
