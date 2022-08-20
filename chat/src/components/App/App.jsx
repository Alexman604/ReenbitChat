import "./App.css";
import { Component } from "react";
import SearchPanel from "../search/search-panel";
import MessageInput from "../message-input/message-input";
import ChatBox from "../chatbox/chatbox";
import Contacts from "../contacts/contacts";
import { Data } from "./data";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,  
      activeID: 1,
      
    };
    }


    componentDidMount() {
    //  localStorage.clear();
      const dataFromLS = JSON.parse(localStorage.getItem('data'));
      console.log(dataFromLS);
      if (dataFromLS === null) {localStorage.setItem('data', JSON.stringify(this.state.data))}
      else 
      {this.setState((state) => ({data: dataFromLS}));}

    };



  addMessage = (msg, date, contactIdAddMessage) => {
  const {data} = this.state;
    const newMessage = {
      msg,
      date,
    };
    this.state.data[contactIdAddMessage-1].chatHistory.push(newMessage);
    this.setState({message: "", date: " "})
    this.setState(({ data }) => ({ data }));
    this.pushUpInLis(data, contactIdAddMessage);
    };
  
    pushUpInLis = (data, contactIdAddMessage) => {
      data.push(...data.splice(0,(contactIdAddMessage-1)))
      this.onActiveIDChange((contactIdAddMessage))
      localStorage.setItem('data', JSON.stringify(this.state.data))

    }

  onActiveIDChange = (contactId) => {
    this.setState(() => {
      
      return {activeID: contactId };
      
    }
    
    );
    
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
          <MessageInput addMessage={this.addMessage} activeID={this.state.activeID}/>
        </section>
      </div>
    );
  }
}

export default App;
