import "./contacts.css"

const ContactItem = (props) => {
  //  console.log(props)
    const {img, name, lastMsgDate, lastMsg} = props;
    return (
        <li> 
        <img src={img} alt="" />
        <div className='text-container'>
          <h3 className='name'>  {name}</h3>
          <span className='data'> {lastMsgDate} </span>
          <span className='msg'> {lastMsg}</span>
         </div>
        </li>
    )
}

export default ContactItem;