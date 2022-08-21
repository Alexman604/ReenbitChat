import './contacts.css'

const Contacts = ({data, onActiveIDChange}) => {

    return(
     <div className="contacts_wrapper">
     <h2>Chats</h2>
     <ul>
         {data.map((item, index)=>( 
          <li className='contactList' key = {index} onClick = {() => {onActiveIDChange(item.contactId)}}> 
                <img src={item.img} alt="" />
                <div className='text-container'>
                <h3 className={`name ${item.chatHistory[item.chatHistory.length-1].notification}`} >  {item.name}</h3>
                <span className='date'> {(item.chatHistory[item.chatHistory.length-1].date.slice(0, 8))} </span>
                <span className='msg'> {item.chatHistory[item.chatHistory.length-1].msg}</span>
                </div>
          </li>
          ))
         }
    </ul>
    </div>
)

}
export default Contacts;