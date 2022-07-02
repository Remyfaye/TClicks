
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import {useState} from 'react'

import './home.css'
import Bottombar from '../../components/bottombar/Bottombar'

export default function Home(){
    const [btnState, setBtnState] = useState(true);
    const [shareState,setShareState] = useState(false)
    function changeTopbar(){
       setBtnState(btnState => false)
    }

    function displayShare(){
        
        setShareState(shareState => !shareState)
     }

    let topbarToggle =  btnState ? ' ' : ' explore'
    let shareToggle =  shareState ? ' clicked' : ' '
    
    return(
        <div>
            <Topbar 
            toggle={topbarToggle}
            share={displayShare}
            logo='TClicks'/>
            
            <div className='homeContainer'>
                <Sidebar/>
                <Feed home stoggle={shareToggle}/>
                <Rightbar/>
                
            </div>
            <Bottombar change={changeTopbar}/>
           
        </div>
        
    )
}