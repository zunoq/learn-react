import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList'
function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
