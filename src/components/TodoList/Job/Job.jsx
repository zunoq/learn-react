import React from 'react'
import './Job.css'
const Job = ({ todo }) => {
    console.log(todo)
    return (
        <div className='task'>
            <span> {todo} </span>
            <button>Remove</button>
            <button>Edit</button>

        </div>
    )
}

export default Job
