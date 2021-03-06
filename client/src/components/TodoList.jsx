import React, { useContext } from 'react'
import { Context } from "../App"
import { completeTodo, deleteTodo } from "./API"

export default function TodoList() {
    const { todos, setReload } = useContext(Context)


    function setTime(createdAt){
        return createdAt.substring(0, 10).replace("T", " kl ")
    }

    const setCompleteTodo = async id => {
        await completeTodo(id)
        .then(res => res.json())
        .then(setReload(false))
    }

    const removeTodo = async id => {
        await deleteTodo(id)
        .then(res => res.json())
    }

  return (
    <>
   {todos ? todos.map(todo => (
        <div className={"todo " + (todo.complete ? "is-complete" : "")}
        key={todo._id} onClick={() => setCompleteTodo(todo._id)}>
            <div className="checkbox"></div>
    
            <div className="text">{todo.text}</div>

            {todo.tagList ? todo.tagList.map((tag, index) => (
                <div className="todoTags" key={index}>{tag}</div>
            )) : ""}

            <div className="delete-todo" onClick={() => removeTodo(todo._id)}>x</div>
            <div className="timestamp">{setTime(todo.createdAt)}</div>
        </div>
    )) : "No todos"}
    </>
  )
}
