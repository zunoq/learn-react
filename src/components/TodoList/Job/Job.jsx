import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa';

import './Job.css'
const Job = ({ todo, todos, setTodos }) => {
    console.log(todo)
    const handleRemoveJob = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    console.log(todos)
    return (
        <div className='task'>
            <span> {todo.jobName} </span>
            <button>
                <FaTrash
                    style={{ fontSize: "20px" }}
                    onClick={handleRemoveJob}
                />
            </button>
            <button>
                <FaEdit style={{ fontSize: "20px" }} />
            </button>

        </div>
    )
}

export default Job
