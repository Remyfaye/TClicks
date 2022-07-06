

import './bottombar.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MessageIcon from '@mui/icons-material/Message';
import {useState} from 'react'

import {Link} from 'react-router-dom'
import image1 from '../../assets/persons/1.jpeg'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Bottombar(props){

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState (btnState => !btnState)
        console.log('hi')
    }

    
    return(
        
        <div className='bottom'>
            
            <div className='bottomWrapper'>
            
                <div className='bottomList'>

                    <div className='botttomListItem'>
                        <Link to = '/home'><HomeIcon className='bottonIcon'/></Link>
                        <span className='bottomText'>Home</span>
                    </div>

                    <div className='botttomListItem'>
                    <Link to = '/chats'><MessageIcon className='bottonIcon'/></Link>
                        <span className='bottomText'>Messages</span>
                    </div>

                    <div className='botttomListItem'>
                    <Link to = '/explore'>
                        <ExploreIcon className='bottonIcon' onClick={props.change}/>
                    </Link>
                        <span className='bottomText'>Explore</span>
                    </div>


                    
                

                    
                    <Link to = '/personal'><img alt='' 
                    className='bottomProfileImg' 
                    src={image1}
                    /></Link>
                    

                </div>
            </div>
        </div>
    )
}