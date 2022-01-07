import React, { useState } from 'react'
import './InputForm.css'
const InputForm = ({ todos, setTodos, isEdit, isDone, handleEditJob, handleShowAdd }) => {
    var date = new Date();
    var timeBegin = date.getHours() + ':' + (date.getMinutes())
    var timeEnd = (date.getHours() + 1) + ':' + (date.getMinutes())
    console.log(timeEnd)
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
    console.log(todo)
    const handleSubmit = () => {
        setTodos((prev) => {
            return [...prev, todo]
        })
        setId(id => Math.floor(Math.random() * 10000))
        setTodo({
            id: id,
            jobName: '',
            timeBegin: timeBegin,
            timeEnd: timeEnd,
            isDone: false,
        })
    }

    console.log(todos)
    return (
        <div id="newtask">
            {isEdit ?
                <h2>EDIT A TODO</h2>
                :
                <h2 onClick={handleShowAdd}>ADD A TODO</h2>
            }
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
            <input
                className='labelInput'
                value={todo.timeEnd}
                onChange={handleAddTimeEnd}
                type="time"
                id='todo'
            />
            {
                isEdit ?
                    <button className="btn btn-submit" id="push" onClick={handleEditJob}>EDIT</button>
                    :
                    <button className="btn btn-submit" id="push" onClick={handleSubmit}>ADD</button>

            }

        </div>
    )
}

export default InputForm
