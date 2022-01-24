import React from "react";
import { ButtonComponent } from "./Button.component";
import "./List.styles.css";

export const ListComponent = ({ list }) => {
  return (
    <li>
      <span>{list}</span>
      <div className="button-container">
        <ButtonComponent> INCOMPLETE </ButtonComponent>
        <ButtonComponent> DELETE </ButtonComponent>
      </div>
    </li>
  );
};
