import React, { useContext, useEffect } from 'react'
import { Context } from '../App'
import { getUserInfo } from "./API"

export default function GetUser() {
    const { username, setUsername } = useContext(Context)

    useEffect(async () => {
        await getUserInfo()
        .then(res => res.json())
        .then(data => setUsername(data.username))
    }, [])

  return (
    <div className='username'>
        <h1>Hello {username}</h1>
    </div>
  )
}
