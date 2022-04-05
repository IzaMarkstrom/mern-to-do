import React from 'react'

export const RenderTodos = () => {
    return (
        <>
        <div className="todo">
            <div className="checkbox"></div>

            <div className="text">Buy chocolate</div>

            <div className="delete-todo">x</div>
        </div>
        <div className="todo is-complete">
            <div className="checkbox"></div>

            <div className="text">Buy milk</div>

            <div className="delete-todo">x</div>
        </div>
        </>
    )
}



