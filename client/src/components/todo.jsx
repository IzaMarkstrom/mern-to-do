import React, { useState, useEffect } from 'react'
import { BASE_API } from "../utils"

export const RenderTodos = () => {
    const [todos, setTodos] = useState([])
  
    useEffect(() => {
      fetch(`${BASE_API}/todos/homepage`)
        .then(res => res.json())
        .then(data => setTodos(data.todoData))
        .then(sortTodosByTime(todos))
        .catch(err => console.error(`Error: ${err}`))
    }, [])

    function setTime(createdAt){
        return createdAt.substring(0, 16).replace("T", " kl ")
    }
    
    function sortTodosByTime(todos1) {
        const reversedTodos = todos1.reverse()
        setTodos(reversedTodos)
        console.log(todos)
    }

    const completeTodo = async id => {

        console.log(id)

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch(`${BASE_API}/todos/${id}`, requestOptions)
                .then(res => res.json())
                // .then(data => console.log(data));
    }

    const deleteTodo = async id => {
        console.log(id)

        fetch(`${BASE_API}/todos/${id}`, { method: 'DELETE' })
        .then(res => res.json())
    }


    return (
        <>
        {todos.map(todo => (
            <div className={"todo " + (todo.complete ? "is-complete" : "")}
            key={todo._id} onClick={() => completeTodo(todo._id)}>
                <div className="checkbox"></div>
        
                <div className="text">{todo.text}</div>
        
                <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
                <div className="timestamp">{setTime(todo.createdAt)}</div>
            </div>
        ))}
        </>
    )
}



