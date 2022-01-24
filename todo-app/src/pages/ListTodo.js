import React, { useEffect, useState } from "react";
import { ListComponent } from "../components/List.component";

export const ListTodo = () => {
  const [todoItems, setTodoItem] = useState([]);

  useEffect(() => {
    const resp = localStorage.getItem("todo");
    const result = JSON.parse(resp);
    setTodoItem(result);
  }, []);

  if (todoItems === null) return <h2>You have nothing do</h2>;

  return (
    <ul>
      {todoItems.map((todo, idx) => (
        <ListComponent key={idx} list={todo.todo} />
      ))}
    </ul>
  );
};

//Exercise
//Write the logic to delete an item from the database.
//Mark an item as completed or not
