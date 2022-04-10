import React from 'react'
import { RenderTodos } from '../components/todo'

export default function HomePage() {

  return (
    <div>
      <h1>Hello ${} Iza</h1>
      <h3>Your tasks</h3>
      
      <div className="todos">
        <RenderTodos/>
      </div>
    </div>
  )
}
