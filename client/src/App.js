import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";

const UserContext = createContext()

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  return (
    <Routes>
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
