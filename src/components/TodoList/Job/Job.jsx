import React, { useState } from 'react'
import { FaTrash, FaPencilAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import './Job.css'
const Job = ({ todo, setTodo, todos, setTodos, handleEditJob, handleShowForm }) => {
    console.log(todo)
    const handleRemoveJob = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const [isDone, setIsDone] = useState(todo.isDone);
    const handleSetIsDone = () => {
        setIsDone(() => !isDone)
    }
    console.log(isDone)
    return (
        <div
            className='task'
            style={isDone ? { backgroundColor: '#42ba96' } : { backgroundColor: '#808080' }}
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
                <button onClick={() => handleSetIsDone(todo.isDone)} >
                    {!isDone ?
                        <FaCheckCircle className='icon-btn' />
                        : <FaTimesCircle className='icon-btn' />
                    }
                </button>
            </div>

        </div >
    )
}

export default Job
