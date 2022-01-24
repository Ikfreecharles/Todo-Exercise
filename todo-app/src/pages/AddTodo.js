import React, { useState } from "react";
import { ButtonComponent } from "../components/Button.component";
import { InputComponent } from "../components/Input.component";

export const AddTodo = () => {
  const [todo, setTodo] = useState({
    todo: "",
    completed: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const resp = localStorage.getItem("todo");
    if (resp !== null) {
      const result = JSON.parse(resp);
      localStorage.setItem("todo", JSON.stringify([...result, todo]));
    } else {
      localStorage.setItem("todo", JSON.stringify([todo]));
    }
    setTodo({
      todo: "",
      completed: false,
    });
  };

  const handleChange = (event) => {
    setTodo({ ...todo, todo: event.target.value });
  };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          value={todo.todo}
          handleChange={handleChange}
        />
        <ButtonComponent backgroundColor="#000" type="submit">
          ADD TASK
        </ButtonComponent>
      </form>
    </div>
  );
};

//Add to the todolist
//Remove from the list
//mark item as completed or not completed
//edit the item

// todo: [
//    {todo:item, completed:false},
//    {todo:item2, completed:true},
//    {todo:ite3, completed:false},
//    {todo:item, completed:false}
// ]
