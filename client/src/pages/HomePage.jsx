import React from 'react'
import CreateTodo from '../components/CreateTodo'
import { GetTodos } from '../components/GetTodos'
import Logout from '../components/Logout'


export default function HomePage() {

  return (
    <div>
      <Logout/>
      <h1>Hello ${} Iza</h1>
      <h3>Your tasks</h3>
      <div className="todos">
        <GetTodos/>
      </div>
      <CreateTodo/>
    </div>
  )
}
