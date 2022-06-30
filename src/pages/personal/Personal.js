

import './personal.css'
import Topbar from '../../components/topbar/Topbar'
import Bottombar from '../../components/bottombar/Bottombar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Personal(){
    return(
        <div>
             <Topbar />
            
            <div className='homeContainer'>
                <Sidebar/>
                <Feed />
                <Rightbar/>
                
            </div>
            <Bottombar/>
        </div>
    )
}