import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Logout() {
    const navigate = useNavigate()

    const logout=()=>{
        localStorage.clear()
        navigate('/')
    }

  return (
    <button onClick={logout} className="logoutButton">Logout</button>
  )
}
