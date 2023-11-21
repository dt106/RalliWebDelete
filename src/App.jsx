import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./pages/HomePage";
import Login from "./pages/LoginPage";
import './script.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position='top-center' autoClose = {1500} />
    </div>
  );
}

export default App;
