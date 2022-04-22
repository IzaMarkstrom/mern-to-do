import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";

const Context = createContext()

function App() {
  const [username, setUsername] = useState("")
  const [todos, setTodos] = useState(null)
  const [reload, setReload] = useState(false)


  return (
    <Context.Provider value={{ username, setUsername, todos, setTodos, reload, setReload }}>
      <div className="">
        <Routes>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export { Context }
export default App;
