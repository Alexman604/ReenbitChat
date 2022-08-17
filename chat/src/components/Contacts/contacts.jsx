import ContactItem from './contactItems';
import './contacts.css'

const Contacts = ({data}) => {
     
     const friend = data.map ( item => {
          
          const {...itemProps} = item;
          console.log(item.chatHistory);
          return (
          < ContactItem  {...itemProps}/>  
          )       
})

return(
     <div className="contacts_wrapper">
     <h2>Chats</h2>
     <ul>
         {friend}
    </ul>
    </div>
)

}
export default Contacts;