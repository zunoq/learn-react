import React, { useState } from 'react'
import Job from './Job/Job'
import './TodoList.css'
import InputForm from './InputForm/InputForm'
const TodoList = () => {
    const [todos, setTodos] = useState([])
    return (
        <div >
            <InputForm
                todos={todos}
                setTodos={setTodos}
            />
            <div id="tasks">
                {todos.map((todo) => (
                    <Job
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}

                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList
