import React from "react";
import "./messages.css";

const Messages = ({ ...props }) => 
    <>
      {props.messages.map((item, index) => (
        <React.Fragment key={index}>
          <div className="message">
            <img src={props.img} alt="" />
            <div className="text-container">
              <span className="msg"> {item.msg}</span>
              <span className="data"> {item.date} </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>


export default Messages;
