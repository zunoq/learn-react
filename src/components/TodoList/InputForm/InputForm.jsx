import React, { useState } from 'react'
import './InputForm.css'
const InputForm = ({ todos, setTodos, isEdit, editItem, setEditItem, handleUpdateSubmit }) => {
    var date = new Date();
    var hourBegin = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
    var hourEnd = (date.getHours() + 1) >= 10 ? (date.getHours() + 1) : `0${(date.getHours() + 1)}`
    var minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
    var timeBegin = hourBegin + ':' + minutes
    var timeEnd = hourEnd + ':' + minutes
    const [todo, setTodo] = useState({
        id: date.getTime(),
        jobName: '',
        timeBegin: timeBegin,
        timeEnd: timeEnd,
        isDone: false,
    })
    const handleChange = (event) => {
        setTodo((todo) => ({ ...todo, [event.target.name]: event.target.value }))
    }
    const handleUpdateChange = (event) => {
        console.log(editItem);
        setEditItem((editItem) => ({ ...editItem, jobName: event.target.value }))
    }
    const handleSubmit = (event) => {
        setTodos((prev) => {
            return [...prev, todo]
        })
        setTodo({
            id: date.getTime(),
            jobName: '',
            timeBegin: timeBegin,
            timeEnd: timeEnd,
            isDone: false,
        })

    }

    return (
        <div id="newtask">
            {isEdit ?
                <h2>EDIT </h2>
                : <h2>ADD A TODO</h2>
            }

            <form action="" onSubmit={handleSubmit}>

                <h3>Job name</h3>
                {isEdit ?
                    <input
                        className='labelInput'
                        name="jobName"
                        placeholder={editItem.jobName}
                        onChange={handleUpdateChange}
                        value={editItem.jobName}
                        type="text" id='todo'
                        autoComplete="off"
                    />
                    : <input
                        className='labelInput'
                        name="jobName"
                        value={todo.jobName}
                        onChange={handleChange}
                        type="text" id='todo'
                        placeholder="Type a job here..."
                        autoComplete="off"
                    />
                }
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
            {isEdit ?
                <button
                    className="btn btn-submit"
                    id="push"
                    onClick={() => { handleUpdateSubmit(todo) }}
                >
                    UPDATE
                </button>
                : <button
                    className="btn btn-submit"
                    id="push"
                    onClick={() => { handleSubmit() }}
                >
                    ADD
                </button>
            }
        </div>
    )
}

export default InputForm
