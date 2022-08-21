import React from "react";
import ChatHeader from "../chat-header/chat-header";

import "./chatbox.css";
import Messages from "./messages";

const ChatBox = ({ data, activeID }) => {
  return (
    <div className="chatbox-wrapper">
      {data.map((item, index) => {
        if (activeID === item.contactId)
          return (
            <React.Fragment key={index}>
            <ChatHeader img = {item.img} name = {item.name}/>
              
                <div className ="messageContainer" >
                <Messages messages={item.chatHistory} img={item.img}/>
                
              </div>
            </React.Fragment>
          );
      })}
    </div>
  );
};

export default ChatBox;

