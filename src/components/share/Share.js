

import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share({tol}){
    return(
        <div className={`share${tol}`}>
            <div className='shareWrapper'>

                <div className='shareTop'>
                    <img alt='' src='assets/persons/1.jpeg' className='shareProfileImg'/>
                    <input className='shareInput' placeholder="What's on your mind Sarah?"/>

                </div>

                <hr className='shareHr'/>

                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <div className='shareOption'>
                            <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                            <span className='shareOptionText'>Photo/Video</span>
                        </div>

                        <div className='shareOption'>
                            <LabelIcon htmlColor='blue' className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>

                        <div className='shareOption'>
                            <RoomIcon htmlColor='green' className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>

                        <div className='shareOption'>
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>

                    <button className='shareButton '>Share</button>
                </div>
            </div>
        </div>
    )
}