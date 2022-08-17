import { Component } from "react";
import "./message-input.css";

class MessageInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    getJoke = () => {
        fetch('https://reqbin.com/echo/get/json')
        .then(response => response.json())
        .then(json => console.log(json))
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
                <button onClick={this.getJoke}>GO</button>
            </form>
            </div>    
        )

    }

};


export default MessageInput;