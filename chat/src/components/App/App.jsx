import './App.css';
import {Component} from 'react';
import SearchPanel from '../search/search-panel'
import MessageInput from '../message-input/message-input';
import ChatBox from '../chatbox/chatbox';
import ChatHeader from '../chat-header/chat-header';
import Contacts from '../contacts/contacts';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {name: "Alex Marin", 
        id: 1,
        img: "https://icons.iconarchive.com/icons/google/noto-emoji-people-face/32/10122-baby-icon.png",
        lastMsg: "hello World hello",
        lastMsgDate: "11 march 1011",
        chatHistory: [{msg:"foo", date:"11-11-11"}, {msg:"bar", date:"11-11-11"}, {msg:"baz", date:"11-11-11"}]
        },

        {name: "Fred Box", 
        id: 2,
        img: "https://icons.iconarchive.com/icons/google/noto-emoji-people-face/32/10128-child-icon.png",
        lastMsg: "Hi from Fred",
        lastMsgDate: "22 march 2022",
        chatHistory: [{msg:"bazzz", date:"22-22-22"}, {msg:"free", date:"22-22-22"}, {msg:"baz", date:"22-22-22"}]
      }
      ],
      activeID: "1"
    }
  }
 
  render() {

      return (
      <div className="app">
        <section className='left-side'>

        <SearchPanel/>
        <Contacts data = {this.state.data}/>
       

        </section>

        <section className='right-side'>
        <ChatHeader data = {this.state.data}/>
        <ChatBox data = {this.state.data} activeID = {this.activeID}/>
        <MessageInput/>
        </section>
    
    
    </div>
    );
  }
 
 

}

export default App;
