import React from "react";
import dialogsStyle from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={dialogsStyle.dialog}>{props.message}</div>;
};
export default Message;
