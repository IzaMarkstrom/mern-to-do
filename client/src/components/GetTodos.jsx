import React, { useEffect, useContext } from 'react'
import { BASE_API } from "../utils"
import { completeTodo, getTodoList } from "./API"
import { Context } from "../App"

export const GetTodos = () => {
    const {todos, setTodos} = useContext(Context)
  
    useEffect(async () => {
        await getTodoList()
        .then(res => res.json())
        .then(data => setTodos(data.todoData))
        .catch(err => console.error(`Error: ${err}`))
    }, [])

    function setTime(createdAt){
        return createdAt.substring(0, 16).replace("T", " kl ")
    }

    const setCompleteTodo = async id => {
        await completeTodo(id)
        .then(res => res.json())
    }

    const deleteTodo = async id => {
        console.log(id)

        fetch(`${BASE_API}/todos/${id}`, { method: 'DELETE' })
        .then(res => res.json())
    }


    return (
        <>
        {todos && todos.map(todo => (
            <div className={"todo " + (todo.complete ? "is-complete" : "")}
            key={todo._id} onClick={() => setCompleteTodo(todo._id)}>
                <div className="checkbox"></div>
        
                <div className="text">{todo.text}</div>
        
                <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
                <div className="timestamp">{setTime(todo.createdAt)}</div>
            </div>
        ))}
        </>
    )
}



