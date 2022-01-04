import React, { useState } from 'react'
import Job from './Job/Job'
import './TodoList.css'
const TodoList = ({ todo, setTodo, todos, handleAddTodo }) => {
    return (
        <div >
            <div id="newtask">
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    type="text" id='todo'
                />
                <button id="push" onClick={handleAddTodo}>ADD</button>
            </div>
            <div id='tasks'>
                <div>
                    {todos.map((todo, index) => (
                        <Job
                            todo={todo}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div >

    )
}

export default TodoList
