import React, { useState } from 'react'
import { createNewTodo, getTodoList } from "./API"

export default function CreateTodo() {
    const [popupActive, setPopupActive] = useState(false)
    const [newTodo, setNewTodo] = useState("")

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        await createNewTodo(newTodo)
        .then(res => res.json())
        .then(data => getTodoList())

        setPopupActive(false)
        
    }

  return (
      <>
    <div className='addPopup' onClick={() => setPopupActive(true)}>+</div>
    {popupActive ? (
            <div className='popupBox'>
                <div className='closePopupBox' onClick={() => setPopupActive(false)}>x</div>
                <div className='content'>
                    <h3>Add todo</h3>
                    <input 
                        type = "text" 
                        className = 'newTodo'
                        onChange = {e => setNewTodo(e.target.value)}
                        value = {newTodo}
                    />
                    <button className='submitTodo' onClick={handleOnSubmit}>Create todo</button>
                </div>
        </div>
    ) : ""}
    </>
  )
}
