

import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'


export default function Profile(){
    const ProfileRightbar = ()=> {
        return(
            <div className='profileRightbar'>
                <h4 className='rightbarTitle'>User Information</h4>

                <div className='rightbarInfo'>

                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>City:</span>
                        <span className='rightbarInfoValue'>Lagos</span>
                    </div>

                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>Occupation:</span>
                        <span className='rightbarInfoValue'>Student</span>
                    </div>

                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>Relationship:</span>
                        <span className='rightbarInfoValue'>Single</span>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div>
            <Topbar/>
            <div className='profile'>

                <Sidebar/>

                <div className='profileRight'>

                    <div className='profileTop'>

                        <div className='profileCover'>
                        <img className='profileCoverImg' src='assets/posts/2.jpeg' alt=''/>
                        <img className='profileUserImg' src='assets/persons/1.jpeg' alt=''/>
                        <ProfileRightbar />
                        </div>

                        <div className='profileInfo'>
                            <h4 className='ProfileInfoName'>Sarah Jenkins</h4>
                            <span className='profileInfoDesc'>Hello Friends</span>
                        </div>
                        
                    </div>

                    <div className='profileBottom'>
                    <Feed/>
                    <Rightbar profile/>
                    </div>

                    
                </div>
                
            </div>
        </div>
    )
}