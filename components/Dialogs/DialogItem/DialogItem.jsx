import React from "react";
import dialogsStyle from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={dialogsStyle.dialogs + " " + dialogsStyle.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
export default DialogItem;
