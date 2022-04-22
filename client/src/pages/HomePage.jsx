import React, { useEffect, useContext} from 'react'
import CreateTodo from '../components/CreateTodo'
import GetAllTodos from '../components/GetAllTodos'
import GetCompletedTodos from '../components/GetCompletedTodos'
import Logout from '../components/Logout'
import TodoList from '../components/TodoList'
import { Context } from '../App'
import { getTodoList } from '../components/API'


export default function HomePage() {
  const { setTodos, reload, setReload } = useContext(Context)

  useEffect(() => {
    getTodos()
    // getUser()
  }, [reload])

  const getTodos = async () => {
    await getTodoList()
    .then(res => res.json())
    .then(data => setTodos(data.todoData))
    .then(setReload(true))
    .catch(err => console.error(`Error: ${err}`))
    
}
  return (
    <div>
      <Logout/>
      <h1>Hello ${} Iza</h1>
      <h3>Your tasks</h3>
      <div className="todos">
        <GetAllTodos/>
        <GetCompletedTodos/>
        <TodoList/>
      </div>
      <CreateTodo/>
    </div>
  )
}
