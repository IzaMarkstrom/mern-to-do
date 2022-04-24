import React, { useContext } from 'react'
import { Context } from '../App'

export default function CreateTags() {
    const { tags, setTags } = useContext(Context)

    function handleKeyDown(e){
        if(e.key !== "Enter") return

        const value = e.target.value

        if(!value.trim()) return

        setTags([...tags, value])
        e.target.value = ""
    }

    function removeTag(index){
        setTags(tags.filter((_el, i) => i !== index))
    }

  return (
    <div className='tagsContainer'>
        <input onKeyDown={handleKeyDown} type="text" className='newTagInput' placeholder='  Add tags'/>
        {tags.map((tag, index) => (
            <div className='tagItem' key={index}>
                <span className='tagSpan'>{tag}</span>
                <span className='removeTagButton' onClick={() => removeTag(index)}>x</span>
            </div>
            )
        )}
    </div>
  )
}
