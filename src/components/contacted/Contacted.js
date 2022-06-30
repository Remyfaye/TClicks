

import './contacted.css'


export default function Contacted({contacted}){
    return(
        <div className='contacted'>
            
            <li className='contactedFriend'>
                <img className='contactedFriendImg' src={contacted.profilepicture} alt=''/>
                <span className='contactedFriendName'>{contacted.username}</span>
            </li>
        </div>
    )
}