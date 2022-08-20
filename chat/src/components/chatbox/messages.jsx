import React from "react";
import "./messages.css";

const Messages = ({ ...props }) => (
  <>
    {props.messages.map((item, index) => (
      <div className="message" key={index}>
        <div className="textContainer">
          <img src={props.img} alt="" />
          <span className="messageText"> {item.msg}</span>
        </div>
        <span className="MessageDate"> {item.date} </span>
      </div>
    ))}
  </>
);

export default Messages;
