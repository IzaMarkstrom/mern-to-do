import React from 'react'
import CreateTodo from '../components/CreateTodo'
import GetAllTodos from '../components/GetAllTodos'
import GetCompletedTodos from '../components/GetCompletedTodos'
import Logout from '../components/Logout'
import TodoList from '../components/TodoList'


export default function HomePage() {

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
