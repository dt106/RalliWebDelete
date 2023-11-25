import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./pages/HomePage";
import Login from "./pages/LoginPage";
import './script.js';
import { RedirectToLogin } from "./services/RedirectToLogin.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<RedirectToLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position='top-center' autoClose = {1500} />
    </div>
  );
}

export default App;
