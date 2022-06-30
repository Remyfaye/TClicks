
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import {useState} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';

export default function Topbar(props) {

    

    return (      
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Tclicks</span>
                
            </div>

            <div className='topbarCenter'>
                <div className='searchbar'>
                    <SearchIcon className='searchIcon'/>
                    <input placeholder='search for friends,post or video' 
                    className='searchInput'/>
                </div>
            </div>

            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>

                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <PersonIcon/>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    
                        
                    <div className='topbarIconItem'>
                        <ChatIcon/>
                        <span className='topbarIconBadge'>5</span>
                    </div>

                    <div className='topbarIconItem'>
                        <NotificationsIcon/>
                        <span className='topbarIconBadge'>1</span>
                    </div>

                    
                </div>

                <img src='/assets/persons/1.jpeg' className='topbarImg'/>
            </div>

            <div className='topvbarRightMobile'>
                <div className='topbarIconItem'>
                    <SendIcon className='topbarSendIcon'/>
                </div>

                <div className='topbarIconItem'>
                    <SearchIcon className='topbarSendIcon'/>
                </div>

                
            </div>
        </div>   
    )
  }
  
  














