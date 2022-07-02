

import MessagesList from './MessagesList'
import MessageStatus from './MessageStatus'
import {MessageDataItem} from '../../messageData'
import './messagefeed.css'
import {useState} from 'react'

export default function MessageFeed(status){

   
    
    

    const [btnState,setBtnState] = useState(false)

    const toggleActive = btnState ? ' status' :' '
    function displayStatus(){
        setBtnState(btnState => true)
    }

    function displayChat(){
        setBtnState(btnState => false)
    }
    
    
    return(
        <div className="classWrapper">

           <div className="chatTop">
                <h3 className="topText" onClick={displayChat}>Chats</h3>
                <h3 className="topText" onClick={displayStatus}>Status</h3>
                <h3 className="topText">Calls</h3>
           </div>

           <div className="chatBottom">
           {MessageDataItem.map((m) => (
                    <MessagesList
                    toggle={toggleActive}
                    chat={m}/>
                ))}
                
                <div className={`statusSection${status}`}>

                    <div className='statusTop'>
                        <div className='addStatus'>
                            <img src='assets/persons/1.jpeg' 
                            className='statusProfileImg'/>
                            <div className='greenDott'>+</div>
                        </div>
                        
                        <div className='statusInfo'>
                            <h3>My status</h3>
                            <span>Tap to add Status Update</span>
                        </div>
                    </div>

                    <div className='statusCenter'>
                        <h4>Resent Status</h4>
                    </div>

                    <div className='statusBottom'>
                    {MessageDataItem.map((m) => (
                    <MessageStatus
                    toggle={toggleActive}
                    chat={m}/>
                    ))}
                    </div>

                
                
                </div>
           
         
           </div>
        </div>
    )
}