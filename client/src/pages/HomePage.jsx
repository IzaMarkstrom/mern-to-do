import React, { useEffect, useContext} from 'react'
import CreateTodo from '../components/CreateTodo'
import GetAllTodos from '../components/GetAllTodos'
import GetTodos from '../components/GetTodos'
import GetCompletedTodos from '../components/GetCompletedTodos'
import Logout from '../components/Logout'
import TodoList from '../components/TodoList'
import { Context } from '../App'
import { getTodoList } from '../components/API'
import TagsBox from '../components/TagsBox'
import GetUser from '../components/GetUser'


export default function HomePage() {
  const { setTodos, reload, setReload } = useContext(Context)

  useEffect(() => {
    getTodos()
  }, [reload])

  const getTodos = async () => {
    await getTodoList()
    .then(res => res.json())
    .then(data => setTodos(data.todoData))
    .then(setReload(true))
    .catch(err => console.error(`Error: ${err}`))
}


  return (
    <div>
      <Logout/>
      <GetUser/>
      <h3 className='titleTasks'>These are your tasks</h3>
      <h3 className='titleTags'>All tags</h3>
      <TagsBox/>
      <div className="todos">
        <GetAllTodos/>
        <GetTodos/>
        <GetCompletedTodos/>
        <TodoList/>
      </div>
      <CreateTodo/>
    </div>
  )
}
