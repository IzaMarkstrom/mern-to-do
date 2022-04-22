import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { createNewTodo } from "./API"

export default function CreateTodo() {
    const [popupActive, setPopupActive] = useState(false)
    const [newTodo, setNewTodo] = useState("")
    const [tag, setTag] = useState("")

    const { setReload } = useContext(Context)

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        await createNewTodo(newTodo)
        .then(res => res.json())
        .then(setReload(false))

        setPopupActive(false)
        setNewTodo("")
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
                    <input 
                        type = "text" 
                        className = 'newTag'
                        onChange = {e => setTag(e.target.value)}
                        value = {tag}
                    />
                    <button className='submitTodo' onClick={handleOnSubmit}>Create todo</button>
                </div>
        </div>
    ) : ""}
    </>
  )
}
