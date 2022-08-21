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
      searchInput: '',
      };
    }

    componentDidMount() {
      
      const dataFromLS = JSON.parse(localStorage.getItem('data'));
      if (dataFromLS === null) {localStorage.setItem('data', JSON.stringify(this.state.data))}
      else   {this.setState(() => ({data: dataFromLS}));}
    };

  addMessage = (msg, date, contactIdAddMessage, whichPosition, notification) => {
  const {data} = this.state;
    const newMessage = {
      msg,
      date,
      whichPosition,
      notification
    };
    

    data.map((item, index) =>{
      if (item.contactId===contactIdAddMessage) 
      {item.chatHistory.push(newMessage);
      data.push(...data.splice(0,index))
      }});
   
    this.setState(({ data }));
    //console.log(data);
    localStorage.setItem('data', JSON.stringify(this.state.data))
  
    };
  

  onActiveIDChange = (contactId) => {
    this.setState(() => {
      return {activeID: contactId };
    });
 
  
    this.state.data.map((item) => {
      if (item.contactId === contactId) {console.log(item.chatHistory[item.chatHistory.length-1].notification = "")}
    })
   
  };
  
  searchContact = (contacts, searchInput) => {
    if (searchInput === 0) {return contacts}
      return contacts.filter(contact => {
        return contact.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
      })
  }
  
  onUpdateSearch = (searchInput) =>{
    this.setState({searchInput})
  }

 /*  makeNotification = (id, off) =>{
    this.setState (() => ({notificationId: id}))
    this.setState (() =>({notification: true}))
  } */

  render() {
    const{data, activeID, searchInput} = this.state;
    const filteredData = this.searchContact(data, searchInput);

    return (
      <div className="app">
        <section className="left-side">
          <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
          <Contacts
            data={filteredData}
            onActiveIDChange={this.onActiveIDChange}
          />
        </section>

        <section className="right-side">
          <ChatBox
            data={data}
            activeID={activeID}
            
          />
          <MessageInput addMessage={this.addMessage} activeID={activeID}/>
        </section>
      </div>
    );
  }
}

export default App;
