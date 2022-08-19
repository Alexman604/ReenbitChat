import React from "react";
import "./messages.css";

const Messages = ({ ...props }) => 
    <>
      {props.messages.map((item, index) => (
        <div className="message" key={index}>
          
            <img src={props.img} alt="" />
            <div className="textContainer">
              <span className="messageText"> {item.msg}</span>
            <br />
          </div> 
          <br />
              <span className="MessageDate"> {item.date} </span>
            
        </div>
      ))}
    </>


export default Messages;
