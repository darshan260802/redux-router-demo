import React from "react";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import style from "./App.module.scss";
import Home from "./Components/Home/Home.component";
import Profile from "./Components/Profile/Profile.component";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
