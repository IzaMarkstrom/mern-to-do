import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { createNewTodo } from "./API"
import CreateTags from './CreateTags'

export default function CreateTodo() {
    const [popupActive, setPopupActive] = useState(false)
    const [newTodo, setNewTodo] = useState("")

    const { tags, setReload } = useContext(Context)

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        const payload = {newTodo, tags}
        // console.log(payload)
        await createNewTodo(payload)
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
                        className = 'newTodoInput'
                        placeholder = "Add text"
                        onChange = {e => setNewTodo(e.target.value)}
                        value = {newTodo}
                    />
                    <CreateTags/>
                    <button className='submitTodo' onClick={handleOnSubmit}>Create todo</button>
                </div>
        </div>
    ) : ""}
    </>
  )
}
