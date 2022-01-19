import React from "react";
import { useState } from "react";
import { TodoListcomponent } from "../components/TodoList.component";

import { ButtonComponent } from "./Button.component";
export const Inputcomponent = () => {
  const [input, setInputState] = useState({
    inputValue: "",
  });

  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputState({
      inputValue: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const itemArray = input.inputValue.split(",");
    setTodoList({ todoList: itemArray });
    
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Add your new todo"
        value={input.inputValue}
        onChange={handleChange}
      />
      <ButtonComponent submitTodo={handleClick}/>
      <TodoListcomponent todoItems={todoList} />
    </div>
  );
};
