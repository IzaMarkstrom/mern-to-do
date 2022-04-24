import React, { useState, useContext } from 'react'
import { getTagList, getTodosByTagList } from "./API"
import { Context } from '../App';
import { completeTodo, deleteTodo } from "./API"

export default function TagsBox() {
  const [newTags, setNewTags] = useState([])
  const [todosByTag, setTodosByTag] = useState(null)
  const [popupActive, setPopupActive] = useState(false)

  const { setReload } = useContext(Context)

  window.addEventListener('load', (event) => {
    getTagList()
    .then(res => res.json())
    .then(data => setNewTags(data))
  });



  const searchTag = async tag => {
    getTodosByTagList(tag)
    .then(res => res.json())
    .then(data => setTodosByTag(data.todoData))
    .then(setPopupActive(true))
  }

  
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
    <div className='tagsBox'>
        {newTags ? newTags.map((tag, index) => (
          <div className="tagsInBox" key={index} onClick={() => searchTag(tag)}>{tag}</div>
        )) : "No tags"}
    </div>
    {popupActive ? (
      <div className="todosByTags">
          {todosByTag ? todosByTag.map(todo => (
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
      </div>
    ) : ""}
    </>
  )
}
