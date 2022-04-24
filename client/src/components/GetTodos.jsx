import React, { useContext } from 'react'
import { Context } from "../App"
import { getNotDoneTodoList } from "./API"

export default function GetTodos() {
  const { setTodos } = useContext(Context)

    const handleOnSubmit = async (e) => {
      e.preventDefault()

        await getNotDoneTodoList()
        .then(res => res.json())
        .then(data => setTodos(data.todoData))
    }

  return (
    <button className='allTodosButton' onClick={handleOnSubmit}>Not done todos</button>
  )
}