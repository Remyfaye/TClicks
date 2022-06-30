

import './online.css'


export default function Online({onlinee}){
    return(
        <div>
            <li className='sidebarFriend'>

                <div className='revised'>
                <img className='sidebarFriendImg' src={onlinee.profilepicture} alt=''/>
                <span className='greenDot'></span>
                </div>
               


                <span className='sidebarFriendName'>{onlinee.username}</span>
                    </li>
        </div>
    )
}