import { Component } from "react";
import "./message-input.css";

class MessageInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            message:"",
            date:""
            
        }
    }

    
    onInputChange =(e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    sendNewMessage = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.date);
        this.setState({
            name: '',
            date: ''
        })
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
                onSubmit={this.sendNewMessage}
                name = "messageText"
                value={this.state.name}
                className="message-input"
                placeholder="Type your message"
                onChange={this.onInputChange}
                />
                <button type="submit">GO</button>
            </form>
            </div>    
        )

    }

};


export default MessageInput;