
import './chat-header.css'

const ChatHeader = ({...props}) => {
     return (
       
       
       
       <div className="chat-header">
            <img src={props.img} alt="USerPicture" />
            <h2 className='name'> {props.name} </h2>
        </div>
)
     
}

export default ChatHeader;