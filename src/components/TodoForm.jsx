import React from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");


  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInput('');
   
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        vaue={input}
        name="text"
        className="Todo-input"
        onChange={handleChange}
      />
      <button className="todo-button" >Add todo</button>
    </form>
  );
};

export default TodoForm;
