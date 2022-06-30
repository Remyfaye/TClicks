
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import EventIcon from '@mui/icons-material/Event'
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Online from '../online/Online'
import {Onlinee} from '../../onlineData'

export default function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='sidebarWrapper'>

                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeedIcon className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <ChatIcon className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Chats</span>
                    </li>
                    <li className='sidebarListItem'>
                        <VideoLibraryIcon className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                        <ContactSupportIcon className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className='sidebarListItem'>
                        <EventIcon className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className='sidebarListItem'>
                        <SchoolIcon className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                    
                </ul>

                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'/>

                <h3 className='rightbarTitle'>Online Friends</h3>

                <ul className='sidebarFriendList'>
                    {Onlinee.map(u=>(
                        <Online key={u.id} onlinee={u}/>
                    ))}
                        
                    {/*
                        <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/2.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Tom Hanks</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/3.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Peter skitt</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/4.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Brady kleeve</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/5.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Tommy Ank</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/6.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Jonn Smith</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/7.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Allysaa Hardy</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/8.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Tom Hardy</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImg' src='assets/persons/9.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Vannessa Hanks</span>
                    </li>
                    */}
                    
                </ul>
            </div>
        </div>
    )
}










