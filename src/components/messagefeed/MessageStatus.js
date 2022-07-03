
import image2 from '../assets/persons/6.jpeg'
export default function MessageStatus({chat,status,toggle}){
    return(
        <div>
            <div className='messageStatus'>

            

            <div className="chatLeft">
                <img src={image2} className="chatLeftImg"/>
            

                <div className="chatCenter">

                    <h4 className="chatUser">{chat.username}</h4>
                    <span>{chat.date}</span>
                    
                </div>

            </div>

            
            
        </div>
        </div>
        
        
    )
}