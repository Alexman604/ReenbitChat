
import './contacts.css'

const Contacts = ({data, onActiveIDChange}) => {
     


return(
     <div className="contacts_wrapper">
     <h2>Chats</h2>
     <ul>
         {
          data.map((item, index)=>(
          <li key = {index} onClick = {() => {onActiveIDChange(index+1)}}> 
                <img src={item.img} alt="" />
                <div className='text-container'>
                <h3 className='name'>  {item.name}</h3>
                <span className='data'> {item.lastMsgDate} </span>
                <span className='msg'> {item.lastMsg}</span>
                </div>
          </li>

          ))


         }

    </ul>
    </div>
)

}
export default Contacts;