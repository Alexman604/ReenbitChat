import React from "react";
import ChatHeader from "../chat-header/chat-header";

import "./chatbox.css";
import Messages from "./messages";

const ChatBox = ({ data, activeID }) => {
  return (
    <div className="chatbox-wrapper">
      {data.map((item, index) => {
        if (activeID === index + 1)
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

/*     constructor (props) {
        super(props);
        
        this.state = {
           //totalReactPackages: null
        };
    }

        
  async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log(data.value);
        this.setState({ totalReactPackages: data.value })
    } 

    render () {
        
        const {name, chatHistory} = this.props;
        console.log(name);
      //  const { totalReactPackages } = this.state;
        return (
          <div  className="chatbox-wrapper">
             
             <Message/>
             <Message/>
             <Message/>
             
            
             
            </div>    
        )

    }

}; */

export default ChatBox;

