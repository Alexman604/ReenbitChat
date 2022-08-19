import { Component } from "react";
import "./message-input.css";

class MessageInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            message:"",
            date:"55-55-55"
            
        }
       
    }
   
    
    onInputChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }

    sendNewMessage = (e) => {
        e.preventDefault();
        console.log(this.props.addMessage)
        this.props.addMessage(this.state.message, this.state.date);
        console.log(this.state.message)
        this.setState({message: " ", date: " "})
        
    }

  /*   getJoke = () => {
        fetch('https://reqbin.com/echo/get/json')
        .then(response => response.json())
        .then(json => console.log(json))
    } */
    
    render () {
       
        return (
          <div  className="input-wrapper">
            
            <form className="">
                <input 
                type="text" 
                onSubmit={this.sendNewMessage} 
                name = "message"
                value={this.state.name}
                className="message-input"
                placeholder="Type your message"
                onChange={this.onInputChange}
                />
                <button onClick = {this.sendNewMessage} type="submit">GO</button>
            </form>
            </div>    
        )

    }

};


export default MessageInput;