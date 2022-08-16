import './App.css';
import {Component} from 'react';
import SearchPanel from '../Search/search-panel'
import Contact from '../Contacts/contacts';
import MessageInput from '../Message-input/message-input';
import ChatBox from '../Chatbox/chatbox';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: [
        {name: "Alex", id: 1},
        {name: "Maxim", id:2}
      ]
    }
  }
 
  render() {

      return (
      <div className="app">
        <section className='left-side'>

        <SearchPanel/>
        <Contact/>
       

        </section>

        <section className='right-side'>
        <ChatBox/>
        <MessageInput/>
        </section>
    
    
    </div>
    );
  }
 
 

}

export default App;
