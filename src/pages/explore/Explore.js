import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'

import './explore.css'
import Bottombar from '../../components/bottombar/Bottombar'
import {useState} from 'react'

export default function Explore(){

    const [btnState, setBtnState] = useState(true);
    function changeTopbar(){
       setBtnState(btnState => true)
    }

    let topbarToggle =  btnState ? ' explore' : ' '
   
    
    return(
        <div>
            <Topbar toggle={topbarToggle}
            logo='TClicks'/>
            
            <div className='homeContainer'>
                <Sidebar/>
                <Feed explore/>
                <Rightbar/>
                
            </div>
            <Bottombar change={changeTopbar}/>
           
        </div>
        
    )
}