import "./App.css";
import { Component } from "react";
import SearchPanel from "../search/search-panel";
import MessageInput from "../message-input/message-input";
import ChatBox from "../chatbox/chatbox";
import Contacts from "../contacts/contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Alex Marin",
          id: 1,
          img: "https://icons.iconarchive.com/icons/google/noto-emoji-people-face/32/10122-baby-icon.png",
          chatHistory: [
            { msg: "foo", date: "11-11-11" },
            { msg: "bar", date: "11-11-11" },
            { msg: "baz", date: "11-11-11" },
          ],
        },

        {
          name: "Fred Box",
          id: 2,
          img: "https://icons.iconarchive.com/icons/google/noto-emoji-people-face/32/10128-child-icon.png",
          chatHistory: [
            { msg: "bazzz", date: "22-22-22" },
            { msg: "free", date: "22-22-22" },
            { msg: "baz", date: "22-22-22" },
          ],
        },
      ],
      activeID: 1,
    };
  }

  addMessage = (msg, date) => {
    const newMessage = {
      msg,
      date,
    };
    this.state.data[this.state.activeID-1].chatHistory.push(newMessage);
    
    this.setState({message: "", date: " "})
    this.setState(({ data }) => ({ data }));
    };
  

  onActiveIDChange = (id) => {
    this.setState(() => {
      return { activeID: id };
    });
  };

  render() {
    return (
      <div className="app">
        <section className="left-side">
          <SearchPanel />
          <Contacts
            data={this.state.data}
            onActiveIDChange={this.onActiveIDChange}
          />
        </section>

        <section className="right-side">
          <ChatBox
            data={this.state.data}
            activeID={this.state.activeID}
            
          />
          <MessageInput addMessage={this.addMessage} />
        </section>
      </div>
    );
  }
}

export default App;
