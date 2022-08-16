import { Component } from "react";
import "./chatbox.css";

class ChatBox extends Component {

    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
          <div  className="chatbox-wrapper">
             <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/32/Apps-preferences-desktop-user-icon.png" alt="USerPicture" />
      
            </div>    
        )

    }

};


export default ChatBox;