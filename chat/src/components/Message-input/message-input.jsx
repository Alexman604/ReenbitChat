import { Component } from "react";
import "./message-input.css";

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      date: "",
      isActiveButton: false,
      contactIdAddMessage: 1,
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendNewMessage = (e) => {
    e.preventDefault();
    const { activeID, addMessage } = this.props;
    const { contactIdAddMessage } = this.state;
    this.setState(({ state }) => ({ contactIdAddMessage: activeID }));
    this.setState(() => ({ contactIdAddMessage: activeID }));
    const currentDate = new Date().toLocaleString("en-US");
    addMessage(this.state.message, currentDate, contactIdAddMessage);
    this.setState({message: "", date: " ", contactIdAddMessage: activeID});
    this.setState({ isActiveButton: true });
    setTimeout(() => {
    this.answerFromChuck();
    }, 5000);
  };
 
  async answerFromChuck() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const answer = await response.json();

    const currentDate = new Date().toLocaleString("en-US");
   
    this.props.addMessage(
      answer.value,
      currentDate,
      this.state.contactIdAddMessage
    );
    this.setState({message: " ", date: " "})
    this.setState({ isActiveButton: false });
  }

  render() {
    return (
      <div className="input-wrapper">
        <form className="">
          <input
            type="text"
            name="message"
            value={this.state.message}
            className="message-input"
            placeholder="Type your message"
            onChange={this.onInputChange}
          />
          <button
            disabled={this.state.isActiveButton}
            onClick={this.sendNewMessage}
            type="submit"
          >
            GO
          </button>
        </form>
      </div>
    );
  }
}

export default MessageInput;
