import React, { useContext, useEffect } from 'react'
import { Context } from "../App"
import { getCompletedTodoList } from "./API"

export default function GetCompletedTodos() {
  const { todos, setTodos } = useContext(Context)

    const handleOnSubmit = async (e) => {
      e.preventDefault()

        await getCompletedTodoList()
        .then(res => res.json())
        .then(data => console.log(data.todoData))
        // console.log(todos)
    }
    
  //   useEffect(()=>{
  //     console.log("todos updated")
  //  },[todos])

  return (
    <button className='completedTodosButton' onClick={handleOnSubmit}>Completed todos</button>
  )
}
