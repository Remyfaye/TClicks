
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import {useState} from 'react'

import './messages.css'
import Bottombar from '../../components/bottombar/Bottombar'

export default function Messages(){
    const [btnState, setBtnState] = useState(true);
    function changeTopbar(){
       setBtnState(btnState => false)
    }

    let topbarToggle =  btnState ? ' ' : ' explore'
    return(
        <div>
            <Topbar 
            toggle={topbarToggle}
            logo='Sarah'/>
            
            <div className='homeContainer'>
                <Sidebar/>
                <Feed messages/>
                <Rightbar/>
                
            </div>
            <Bottombar change={changeTopbar}/>
        </div>
    )
}