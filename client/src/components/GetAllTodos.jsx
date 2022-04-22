import React, { useContext } from 'react'
import { Context } from "../App"
import { getTodoList } from "./API"

export default function GetAllTodos() {
  const { setTodos } = useContext(Context)

    const handleOnSubmit = async (e) => {
      e.preventDefault()

        await getTodoList()
        .then(res => res.json())
        .then(data => setTodos(data.todoData))
    }

  return (
    <button className='allTodosButton' onClick={handleOnSubmit}>All todos</button>
  )
}