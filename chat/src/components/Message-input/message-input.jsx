import { Component } from "react";
import "./message-input.css";

class MessageInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render () {
        return (
          <div  className="input-wrapper">
            
            <form className="">
                <input 
                 type="text" 
                 className="message-input"
                placeholder="Type your message"
                />
                <button>GO</button>
            </form>
            </div>    
        )

    }

};


export default MessageInput;