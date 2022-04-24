import React from 'react'
import { getTagList } from "./API"

export default function TagsBox() {

  getTagList()
  .then(res => res.json())
  .then(data => console.log(data))

  return (
    <div className='tagsBox'>
        <h3>All tags</h3>

    </div>
  )
}
