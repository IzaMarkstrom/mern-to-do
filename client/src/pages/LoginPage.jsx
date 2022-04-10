import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { BASE_API } from "../utils"


export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorText, setErrorText] = useState("")

  const navigate = useNavigate()  

  function handleOnSubmit(e) {
    e.preventDefault()
    const payload = {username, password}
    const url = `${BASE_API}/users/login`

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        setErrorText(data.message)
      } else {
        const token = data.token
        localStorage.setItem("todoList", token)
        navigate("/home")
      }
  })
}

  return (
      <div className="containerLogin">
        <div className="loginBox ">
          <h3 className="text-center">Login Page</h3>
            <form onSubmit={handleOnSubmit}>
            {errorText && 
                <p className="text-danger">{errorText}</p>}
            <label>Username: </label>
                <input
                    className="form-control"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Password: </label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                 <input type="submit" value="Submit" className='loginBtn' />
            </form>
          <p className="mt-2">Not a user? Click <a href="/register" className="registerLink">here</a> to create a user</p>
      </div>
  </div>
  )
}
