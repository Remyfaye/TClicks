

export default function MessagesList({chat,toggle}){
    return(
        <div className={`chatListItem${toggle}`}>

            <div className="chatLeft">
                <img src={chat.img} className="chatLeftImg"/>
            

                <div className="chatCenter">
                    <h4 className="chatUser">{chat.username}</h4>
                    <span className="chatMessage">{chat.text}</span>
                </div>

            </div>

            <div className="chatRight">
                {chat.date}
            </div>
        </div>
    )
}