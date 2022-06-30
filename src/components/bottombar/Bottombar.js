

import './bottombar.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MessageIcon from '@mui/icons-material/Message';
import {useState} from 'react'

import {Link} from 'react-router-dom'

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Bottombar(){

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState (btnState => !btnState)
        console.log('hi')
    }

  
    let rightbarActive = btnState ? ' active': ''
    return(
        
        <div className='bottom'>
            
            <div className='bottomWrapper'>
            
                <div className='bottomList'>

                    <div className='botttomListItem'>
                        <Link to = '/'><HomeIcon className='bottonIcon'/></Link>
                        <span className='bottomText'>Home</span>
                    </div>

                    <div className='botttomListItem'>
                    <Link to = '/'><MessageIcon className='bottonIcon'/></Link>
                        <span className='bottomText'>Messages</span>
                    </div>

                    <div className='botttomListItem'>
                    <Link to = '/'><ExploreIcon className='bottonIcon'/></Link>
                        <span className='bottomText'>Explore</span>
                    </div>

                    <div className='botttomListItem'>
                    <Link to = '/'><LocalGroceryStoreIcon className='bottonIcon'/></Link>
                        <span className='bottomText'>Tmart</span>
                    </div>

                    
                

                    
                    <Link to = '/personal'><img alt='' 
                    className='bottomProfileImg' 
                    src='assets/persons/1.jpeg'
                    /></Link>
                    

                </div>
            </div>
        </div>
    )
}