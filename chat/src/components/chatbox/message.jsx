import './message.css'

const Message = ({messages}) => {
        
        console.log(typeof(messages));

     return (
        
            
            {messages,map((msg, date) => {
                return(
                        <>
                        <div className="message">
                        <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/32/Apps-preferences-desktop-user-icon.png" alt="" />
                    
                    
                        <div className='text-container'>
                        <span className='msg'> {msg}</span>
                        <span className='data'> {date} </span>
                              
                         </div>

                        </div>
                
                </>
                )
            })}
            
        
        
)
     
}

export default Message;