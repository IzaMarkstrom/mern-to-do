import React, { useContext } from 'react'
import { Context } from "../App"
import { getCompletedTodoList } from "./API"

export default function GetCompletedTodos() {
  const { setTodos } = useContext(Context)

    const handleOnSubmit = async (e) => {
      e.preventDefault()

        await getCompletedTodoList()
        .then(res => res.json())
        .then(data => setTodos(data.todoData))
    }

  return (
    <button className='completedTodosButton' onClick={handleOnSubmit}>Completed todos</button>
  )
}
