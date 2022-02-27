import React from "react";
import { ButtonComponent } from "../components/Button.component";
import { InputComponent } from "../components/Input.component";
import { ListComponent } from "../components/List.component";

export const Home = () => {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <InputComponent />
      <ListComponent />
      <ButtonComponent backgroundColor='purple'> Clear All </ButtonComponent>
    </div>
  );
};
