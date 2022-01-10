import React, { useState } from 'react'
import { FaTrash, FaPencilAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import './Job.css'
const Job = ({ todo, setTodo, todos, setTodos, handleEditJob, handleShowForm }) => {
    const handleRemoveJob = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const [isDone, setIsDone] = useState(todo.isDone);
    const handleSetIsDone = () => {
        setTodos([todo.isDone = !todo.isDone])
    }
    console.log(todos)
    return (
        <div
            className='task'
            style={todo.isDone ? { backgroundColor: '#42ba96' } : { backgroundColor: '#808080' }}
        >
            <div className='task-info'>
                <h2 className='task-title'>
                    {todo.jobName}
                </h2>
                <p className='task-time'>From {todo.timeBegin} to {todo.timeEnd} </p>
            </div>
            <div className='task-actions'>
                <button onClick={() => handleRemoveJob(todo.id)}>
                    <FaTrash className='icon-btn' />
                </button>
                <button onClick={() => {
                    handleEditJob();
                    handleShowForm()
                }}>
                    <FaPencilAlt className='icon-btn' />
                </button>
                <button onClick={() => handleSetIsDone(todo)} >
                    {!todo.isDone ?
                        <FaCheckCircle className='icon-btn' />
                        : <FaTimesCircle className='icon-btn' />
                    }
                </button>
            </div>

        </div >
    )
}

export default Job
