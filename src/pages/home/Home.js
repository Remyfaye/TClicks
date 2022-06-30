
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'

import './home.css'
import Bottombar from '../../components/bottombar/Bottombar'

export default function Home(){
    
    return(
        <div>
            <Topbar />
            
            <div className='homeContainer'>
                <Sidebar/>
                <Feed />
                <Rightbar/>
                <Bottombar/>
            </div>
            
           
        </div>
        
    )
}