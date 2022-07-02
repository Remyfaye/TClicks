

import './personal.css'
import Topbar from '../../components/topbar/Topbar'
import Bottombar from '../../components/bottombar/Bottombar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import {useState} from 'react'

export default function Personal(){

    const [btnState, setBtnState] = useState(true);
    function changeTopbar(){
       setBtnState(btnState => false)
    }

    let topbarToggle =  btnState ? ' ' : ' explore'
    return(
        <div>
             <Topbar toggle={topbarToggle} 
             className='personalTopbar'
             logo='Sarah'/>
            
            <div className='homeContainer'>
                <Sidebar/>
                <Feed personal/>
                <Rightbar/>
                
            </div>
            <Bottombar change={changeTopbar}/>
        </div>
    )
}