import React, { useState } from 'react'
import Job from './Job/Job'
import './TodoList.css'
import InputForm from './InputForm/InputForm'
const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [isEdit, setIsEdit] = useState(false);

    const handleEditJob = () => {
        setIsEdit(() => !isEdit)
    }
    return (
        <div >
            <InputForm
                todos={todos}
                setTodos={setTodos}
                isEdit={isEdit}
                handleEditJob={handleEditJob}
            />
            <div id="tasks">
                {todos.map((todo) => (
                    <Job
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                        handleEditJob={handleEditJob}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList
