import React from "react";
import { ButtonComponent } from "../components/Button.component";
import ListStyle from "../components/List.styles.css";
import deleteIcon from "../Assets/delete.png";

export const ListComponent = (props) => {
  return (
    <div className="list_container">
      <li>I will wash today</li>
      <ButtonComponent
        backgroundColor="red"
        padding="0.6rem"
        borderTopRightRadius="5px"
        borderBottomRightRadius="5px"
        borderRadius="0"
      >
        <img src={deleteIcon} />
      </ButtonComponent>
    </div>
  );
};
