import React from "react";

export const TodoListcomponent = (props) => {
  const  {todoItems} = props;
 // console.log(todoItems);
  const myList = todoItems.map((list, index) =>{

<li key={index}>{list}</li>
  }) ;
  return (
    <div>
      <ul>{myList}</ul>
    </div>
  );
};
