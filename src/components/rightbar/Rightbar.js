
import './rightbar.css'
import RedeemIcon from '@mui/icons-material/Redeem';
import Contacted from '../contacted/Contacted'
import {ContactedData} from '../../contactedList'


export default function Rightbar({profile}){
    

    const HomeRightbar = ()=>{
        return(
            <div>
                <div className='birthdayContainer'>
                    <RedeemIcon className='birthdayImg'/>
                    <span className='birthdayText'>
                        <b>Pola Foster</b> and <b>3 others</b> have a bithday today
                    </span>

                </div>

                <img className='rightbarAd' alt='' 
                src='assets/ad/1.jpeg'/>

                <hr/>

                <h3 className='rightbarTitle'>Recent Stories</h3>

                {ContactedData.map((c)=>(
                    <Contacted key={c.id} contacted={c}/>
                ))}
            </div>
        )
    }

    const ProfileRightbar = ()=> {
        return(
            <div>
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
                        <span className='rightbarInfoValue'></span>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className='rightbar'>
            <div classname='rightbarWrapper'>

                <HomeRightbar/>
                
            </div>
        </div>
    )
}