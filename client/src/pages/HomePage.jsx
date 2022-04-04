import React from 'react'

export default function HomePage() {
  return (
    <div>
      <h1>Hello ${} Iza</h1>
      <h4>Your tasks</h4>
      
      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>

          <div className="text">Buy chocolate</div>

          <div className="delete-todo">x</div>
        </div>
        <div className="todo is-complete">
          <div className="checkbox"></div>

          <div className="text">Buy milk</div>

          <div className="delete-todo">x</div>
        </div>
      </div>
    </div>
  )
}
