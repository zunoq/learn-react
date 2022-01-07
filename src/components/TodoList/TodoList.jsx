import React, { useState } from 'react'
import Job from './Job/Job'
import './TodoList.css'
import InputForm from './InputForm/InputForm'
const TodoList = () => {

    const myLocalStorages = localStorage.getItem('todolist')
    const myJSON = JSON.parse(myLocalStorages)
    const [todos, setTodos] = useState(myJSON ?? [])
    const [isEdit, setIsEdit] = useState(false);
    const [showAdd, setShowAdd] = useState(false)
    const todosLenght = todos.length

    localStorage.setItem("todolist", JSON.stringify(todos))

    const handleShowAdd = () => {
        setShowAdd(!showAdd)
    }

    const handleEditJob = (id) => {
        setIsEdit(() => !isEdit)
    }
    return (
        <div >
            <h1>TODO LIST</h1>
            <div id="tasks">
                {
                    (todosLenght == 0) ?
                        <p className="alert">You don't have any Todo. Let's add something!</p>
                        : todos.map((todo) => (
                            <Job
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                                isEdit={isEdit}
                                setIsEdit={setIsEdit}
                                handleEditJob={handleEditJob}
                            />
                        ))
                }
                {!showAdd ?
                    <button
                        onClick={() => handleShowAdd()}
                        className="btn btn-show-add"
                    >
                        ADD A TODO
                    </button> :
                    <InputForm
                        todos={todos}
                        setTodos={setTodos}
                        isEdit={isEdit}
                        handleEditJob={handleEditJob}
                        handleShowAdd={handleShowAdd}
                    />
                }
            </div>

        </div>
    )
}

export default TodoList
