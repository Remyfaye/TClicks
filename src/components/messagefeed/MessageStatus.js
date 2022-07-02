

export default function MessageStatus({chat,status,toggle}){
    return(
        <div>
            <div className='messageStatus'>

            

            <div className="chatLeft">
                <img src={chat.img} className="chatLeftImg"/>
            

                <div className="chatCenter">

                    <h4 className="chatUser">{chat.username}</h4>
                    <span>{chat.date}</span>
                    
                </div>

            </div>

            
            
        </div>
        </div>
        
        
    )
}