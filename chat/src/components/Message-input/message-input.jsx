import { Component } from "react";
import "./message-input.css";

class MessageInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            message:"",
            date:"",
            isActive: false
            }  
    }

    onInputChange =(e) => {
        this.setState({[e.target.name] : e.target.value})    
    }
    sendNewMessage = (e) => {
        e.preventDefault();
        const currentDate = new Date().toLocaleString();
        this.props.addMessage(this.state.message, currentDate);
        this.setState({message: "", date: " "})
        
        this.setState({isActive : true});
        setTimeout(() => {this.answerFromChuck();}, 5000) 
    }
     async answerFromChuck() {
        //GET request using fetch with async/await
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const answer = await response.json();
        
        const currentDate = new Date().toLocaleString();       
        this.props.addMessage(answer.value , currentDate);
      //  this.setState({message: " ", date: " "})
        this.setState({isActive : false});
    } 

    render () {
       
        return (
          <div  className="input-wrapper">
            
            <form className="">
                <input 
                type="text"                
                name = "message"
                value={this.state.message}
                className="message-input"
                placeholder="Type your message"
                onChange={this.onInputChange}
                />
                <button disabled={this.state.isActive} onClick = {this.sendNewMessage} type="submit">GO</button>
            </form>
            </div>    
        )

    }

};


export default MessageInput;