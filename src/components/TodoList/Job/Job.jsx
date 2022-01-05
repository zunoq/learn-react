import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa';

import './Job.css'
const Job = ({ todo }) => {
    console.log(todo)
    return (
        <div className='task'>
            <span> {todo.jobName} </span>
            <button>
                <FaTrash style={{ fontSize: "20px" }} />
            </button>
            <button>
                <FaEdit style={{ fontSize: "20px" }} />
            </button>

        </div>
    )
}

export default Job
