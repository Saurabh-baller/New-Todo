import React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm';


const TodoList = () => {
    const [todo, setTodo]=useState([]);
  return (
    <div>
      <h1>Todays plan</h1>
      <TodoForm/>
    </div>
  )
}

export default TodoList
