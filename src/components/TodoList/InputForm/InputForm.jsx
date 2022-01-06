import React, { useState } from 'react'
import './InputForm.css'
const InputForm = ({ todos, setTodos }) => {
    var date = new Date();
    var timeBegin = date.getHours() + ':' + (date.getMinutes())
    var timeEnd = (date.getHours() + 1) + ':' + (date.getMinutes())
    // console.log(timeBegin)
    // console.log(timeEnd)
    const [id, setId] = useState(0)
    const [todo, setTodo] = useState({
        id: id,
        jobName: '',
        timeBegin: timeBegin,
        timeEnd: timeEnd,
        isDone: false,
    })

    const handleAddJob = (event) => {
        setTodo((todo) => ({ ...todo, jobName: event.target.value, id: id }))
    }
    const handleAddTimeBegin = (event) => {
        setTodo((todo) => ({ ...todo, timeBegin: event.target.value, }))

    }
    const handleAddTimeEnd = (event) => {
        setTodo((todo) => ({ ...todo, timeEnd: event.target.value, }))

    }
    const handleSubmit = () => {
        setTodos((prev) => {
            return [...prev, todo]
        })
        setId(id => id + 1)
    }
    console.log(todos)
    return (
        <div id="newtask">
            <h2>ADD A TODO</h2>
            <h3>Job name</h3>
            <input
                className='labelInput'
                value={todo.jobName}
                onChange={handleAddJob}
                type="text" id='todo'
                placeholder="Type a job here..."
            />
            <h3>Time begin</h3>

            <input
                className='labelInput'
                value={todo.timeBegin}
                onChange={handleAddTimeBegin}
                type="time"
                id='todo'
            />
            <h3>Time End</h3>
            <h3>abc</h3>
            <input
                className='labelInput'
                value={todo.timeEnd}
                onChange={handleAddTimeEnd}
                type="time"
                id='todo'
            />

            <button className="btn" id="push" onClick={handleSubmit}>ADD</button>
        </div>
    )
}

export default InputForm
