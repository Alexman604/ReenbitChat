import './message.css'

const Message = ({...props}) => {
        
      console.log(props);
      const messagelist = props.messages.map(item=> {return(

                        <>
                        <div className="message">
                        <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/32/Apps-preferences-desktop-user-icon.png" alt="" />
                    
                    
                        <div className='text-container'>
                        <span className='msg'> {item.msg}</span>
                        <span className='data'> {item.date} </span>
                              
                         </div>

                        </div>
                
                 </>

         )
     
        })
    
            return(
                <>
                {messagelist}
                </>
            )
         
                 
                        
                
            }
            
           
        

           

export default Message;