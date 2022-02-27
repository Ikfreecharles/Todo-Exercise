import React from "react";
import { ButtonComponent } from "./Button.component";
import InputStyle from "../components/Input.style.css";
import addIcon from "../Assets/add-icon.png";

export const InputComponent = () => {
  return (
    <div>
      <input type="text" name="" placeholder="Add your new todo" />
      <ButtonComponent backgroundColor="purple" padding ="0.6rem" borderRadius= "3px" marginLeft="3px" >
        <img src={addIcon} />
      </ButtonComponent>
    </div>
  );
};
