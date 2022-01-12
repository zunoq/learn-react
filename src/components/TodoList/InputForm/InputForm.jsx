import React, { useState } from 'react'
import './InputForm.css'
const InputForm = ({ todos, setTodos, isEdit }) => {
    var date = new Date();
    var hourBegin = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
    var hourEnd = (date.getHours() + 1) >= 10 ? (date.getHours() + 1) : `0${(date.getHours() + 1)}`
    var minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
    var timeBegin = hourBegin + ':' + minutes
    var timeEnd = hourEnd + ':' + minutes
    const [id, setId] = useState(Math.floor(Math.random() * 1000000))
    const [todo, setTodo] = useState({
        id: id,
        jobName: '',
        timeBegin: timeBegin,
        timeEnd: timeEnd,
        isDone: false,
    })

    const handleChange = (event) => {
        setTodo((todo) => ({ ...todo, [event.target.name]: event.target.value }))
        // setId((id) => { Math.floor(Math.random() * 100) })
    }

    const handleSubmit = (event) => {

        setTodos((prev) => {
            return [...prev, todo]
        })

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
                <h2>ADD A TODO</h2>
            }
            <form action="" onSubmit={handleSubmit}>

                <h3>Job name</h3>
                <input
                    className='labelInput'
                    name="jobName"
                    value={todo.jobName}
                    onChange={handleChange}
                    type="text" id='todo'
                    placeholder="Type a job here..."
                />
                <h3>Time begin</h3>

                <input
                    className='labelInput'
                    name="timeBegin"
                    value={todo.timeBegin}
                    onChange={handleChange}
                    type="time"
                    id='todo'
                />
                <h3>Time End</h3>
                <input
                    className='labelInput'
                    name="timeEnd"
                    value={todo.timeEnd}
                    onChange={handleChange}
                    type="time"
                    id='todo'

                />
            </form>
            <button
                className="btn btn-submit"
                id="push"
                onClick={() => { handleSubmit() }}
            >
                ADD
            </button>
        </div>
    )
}

export default InputForm
