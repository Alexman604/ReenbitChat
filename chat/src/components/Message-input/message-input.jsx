import { Component } from "react";
import "./message-input.css";

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      date: "",
      contactIdAddMessage: 1,
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.contactIdAddMessage !== this.props.activeID) {
    this.setState(() => ({contactIdAddMessage: this.props.activeID}))}
  };

  sendNewMessage = (e) => {
    e.preventDefault();
    const { contactIdAddMessage } = this.state;
    const currentDate = new Date().toLocaleString("en-US");
    this.props.addMessage(this.state.message, currentDate, contactIdAddMessage, "rightPosition");
    this.setState({message: ""}); 
    this.answerFromChuck(contactIdAddMessage);
  };
 
  async answerFromChuck(contactIdAddMessage) {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const answer = await response.json();
    const currentDate = new Date().toLocaleString("en-US");
    setTimeout(() => {
    this.props.addMessage(answer.value, currentDate, contactIdAddMessage, "leftPosition", "notification");}, 10000);
    this.setState({message: "", date: " "})
  
  }

  render() {
    return (
      <div className="input-wrapper">
        <form className="" onSubmit={this.sendNewMessage}>
          <input
            type="text"
            name="message"
            value={this.state.message}
            className="message-input"
            placeholder="Type your message"
            onChange={this.onInputChange}
            required
          />
          <button
           className="button" type="submit"> </button>
        </form>
      </div>
    );
  }
}

export default MessageInput;
