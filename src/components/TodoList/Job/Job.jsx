import React from 'react'
import { FaTrash, FaPencilAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import './Job.css'
const Job = ({ todo, handleEditJob, handleSetIsDone, handleRemoveJob }) => {

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
                <button onClick={() => handleEditJob(todo.id)}>
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
