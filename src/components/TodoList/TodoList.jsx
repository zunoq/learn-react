import React, { useState } from 'react'
import Job from './Job/Job'
import './TodoList.css'
import InputForm from './InputForm/InputForm'
const TodoList = () => {

    const myLocalStorages = localStorage.getItem('todolist')
    const myJSON = JSON.parse(myLocalStorages)
    const [todos, setTodos] = useState(myJSON ?? [])
    const [isEdit, setIsEdit] = useState(false);
    const [showList, setShowList] = useState(true);
    // const [showForm, setShowForm] = useState(false);
    const [filterJob, setFilterJob] = useState(true);
    const todosLenght = todos.length

    localStorage.setItem("todolist", JSON.stringify(todos))

    // const handleShowForm = () => {
    //     setShowForm(!showForm)
    // }
    const handleshowAllList = () => {
        setShowList(true)
    }
    const handleFilterFormComplete = () => {
        setShowList(false)
        setFilterJob(true)
    }
    const handleFilterFormDoing = () => {
        setShowList(false)
        setFilterJob(false)
    }

    const handleEditJob = (id) => {
        setIsEdit(() => !isEdit)
    }

    console.log(filterJob)

    return (
        <div >
            <h1>TODO LIST</h1>
            <div className="filter-controller">
                <button
                    className="btn btn-filter"
                    onClick={handleshowAllList}
                >
                    ALL
                </button>
                <button
                    className="btn btn-filter"
                    onClick={handleFilterFormComplete}

                >
                    COMPLETED
                </button>
                <button
                    className="btn btn-filter"
                    onClick={handleFilterFormDoing}
                >
                    DOING
                </button>
            </div>
            <div id="tasks">
                {
                    (todosLenght === 0) ?
                        <p className="alert">You don't have any Todo. Let's add something!</p>
                        : !showList ?
                            todos.map((todo) => {
                                if (todo.isDone === filterJob)
                                    return <Job
                                        key={todo.id}
                                        todo={todo}
                                        todos={todos}
                                        setTodos={setTodos}
                                        handleEditJob={handleEditJob}
                                    // handleShowForm={handleShowForm}
                                    />
                            })
                            : todos.map((todo) => (

                                <Job
                                    key={todo.id}
                                    todo={todo}
                                    todos={todos}
                                    setTodos={setTodos}
                                    handleEditJob={handleEditJob}
                                // handleShowForm={handleShowForm}
                                />
                            ))
                }
                {
                    // !showForm ?
                    //     <button
                    //         onClick={() => handleShowForm()}
                    //         className="btn btn-show-add"
                    //     >
                    //         ADD A TODO
                    //     </button> :
                    <InputForm
                        setTodos={setTodos}
                        isEdit={isEdit}
                    // handleShowForm={handleShowForm}
                    />
                }
            </div>

        </div>
    )
}

export default TodoList
