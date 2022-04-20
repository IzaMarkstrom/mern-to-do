import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";
import { getTodoList } from "./components/API";

const Context = createContext()

function App() {
  const [username, setUsername] = useState("")
  const [todos, setTodos] = useState(null)

  useEffect(async () => {
    getTodos()
    // getUser()
  })

  const getTodos = async () => {
    await getTodoList()
    .then(res => res.json())
    .then(data => setTodos(data.todoData))
    .catch(err => console.error(`Error: ${err}`))
}


// const getUser = async () => {
//   await getTodoList()
//   .then(res => res.json())
//   .then(data => setTodos(data.todoData))
//   .catch(err => console.error(`Error: ${err}`))
// }


  return (
    <Context.Provider value={{ username, setUsername, todos, setTodos}}>
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
