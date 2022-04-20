import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";

const Context = createContext()

function App() {
  const [username, setUsername] = useState("")
  const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   getUser()
  //   getTodos()
  // })

  // const getUser = async () => {

  // }

  return (
    <Context.Provider value={{ username, setUsername, todos, setTodos}}>
      <div className="bodyContainer">
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
