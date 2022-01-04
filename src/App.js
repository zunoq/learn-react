import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList'
function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  console.log(todo);

  const handleAddTodo = () => {
    setTodos(prev => [...prev, todo])
    setTodo('')
    console.log(todos)
  }

  return (
    <div className="App">
      <div className="container">
        <TodoList
          handleAddTodo={handleAddTodo}
          todo={todo}
          setTodo={setTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
