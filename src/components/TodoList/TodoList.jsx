import React, { useState, useEffect } from 'react'
import Job from './Job/Job'
import './TodoList.css'
import InputForm from './InputForm/InputForm'
const TodoList = () => {

    const myLocalStorages = localStorage.getItem('todolist')
    const myJSON = JSON.parse(myLocalStorages)
    const [todos, setTodos] = useState(myJSON ?? [])
    const [showList, setShowList] = useState(true);
    const [filterJob, setFilterJob] = useState(true);
    const todosLenght = todos.length
    // const [showForm, setShowForm] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editItem, setEditItem] = useState();
    localStorage.setItem("todolist", JSON.stringify(todos))


    const handleshowAllJob = () => {
        setShowList(true)
    }
    const handleFilterJobComplete = () => {
        setShowList(false)
        setFilterJob(true)
    }
    const handleFilterJobDoing = () => {
        setShowList(false)
        setFilterJob(false)
    }

    const handleEditJob = (id) => {
        setIsEdit(true)
        let newObject = todos.find((todo) => {
            return todo.id === id
        })
        setEditItem(newObject)
    }
    const handleRemoveJob = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleSetIsDone = (todo) => {
        setTodos(todos.map((obj) => {
            if (obj.id !== todo.id)
                return obj
            return { ...obj, isDone: !todo.isDone }
        }))
    }
    const handleUpdateSubmit = (todo) => {
        setTodos(todos.map((obj) => {

            if (obj.id === editItem.id)
                return obj = editItem
            return obj
        }))
        setIsEdit(!isEdit)

    }
    return (
        <div >
            <h1>TODO LIST</h1>
            <div className="filter-controller">
                <button
                    className="btn btn-filter"
                    onClick={handleshowAllJob}
                >
                    ALL
                </button>
                <button
                    className="btn btn-filter"
                    onClick={handleFilterJobComplete}

                >
                    COMPLETED
                </button>
                <button
                    className="btn btn-filter"
                    onClick={handleFilterJobDoing}
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
                                        handleEditJob={handleEditJob}
                                        handleSetIsDone={handleSetIsDone}
                                        handleRemoveJob={handleRemoveJob}


                                    />
                            })
                            : todos.map((todo) => (

                                <Job
                                    key={todo.id}
                                    todo={todo}
                                    handleEditJob={handleEditJob}
                                    handleSetIsDone={handleSetIsDone}
                                    handleRemoveJob={handleRemoveJob}
                                />
                            ))
                }
                <InputForm
                    todos={setTodos}
                    setTodos={setTodos}
                    isEdit={isEdit}
                    editItem={editItem}
                    setEditItem={setEditItem}
                    handleUpdateSubmit={handleUpdateSubmit}
                />
            </div>

        </div>
    )
}

export default TodoList
