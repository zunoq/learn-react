import React, { useState } from 'react'
import Job from './Job/Job'
import './TodoList.css'
const TodoList = ({ todo, setTodo, todos, handleAddTodo }) => {
    console.log(todos)
    return (
        <div >
            <div id="newtask">
                <h3>Name</h3>
                <input
                    className='labelInput'
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    type="text" id='todo'
                    placeholder="Type a job here..."
                />

                <button className="btn" id="push" onClick={handleAddTodo}>ADD</button>
            </div>
            <div id='tasks'>
                <div>
                    {todos.map((todo, index) => (
                        <Job
                            key={index}
                            todo={todo}
                        />
                    ))}
                </div>
            </div>
        </div >

    )
}

export default TodoList
