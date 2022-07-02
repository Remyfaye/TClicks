
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {useState} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom'


export default function Topbar({toggle,share,logo}) {
    
    const [searchState,setSearchState] = useState(false)
    function displaySearch(){
        
        setSearchState(searchState => !searchState)
    }
    let searchToggle = searchState ? ' active' : ' '


    return (      
        <div className={`topbarContainer${toggle}`}>
            <div className='topbarLeft'>
                <span className='logo'>{logo}</span>
                
            </div>

            <div className={`topbarCenter${searchToggle}`}>
                <div className='searchbar'>
                    <SearchIcon className='searchIcon'
                    />
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

               <Link to = '/personal'>
               <img src='/assets/persons/1.jpeg' className='topbarImg'/>
               </Link>
            </div>

            <div className='topvbarRightMobile'>
                <div className='topbarIconItem'>
                    <SearchIcon className='topbarSearchIcon'
                    onClick={displaySearch}/>
                </div>

                <div className='topbarIconItem'>
                    <SendIcon className='topbarSendIcon'
                    onClick={share}/>
                </div>

                

                
            </div>
        </div>   
    )
  }
  
  














