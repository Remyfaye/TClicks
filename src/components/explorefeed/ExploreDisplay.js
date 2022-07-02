
import Kettle from '../video/kettle.mp4'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

export default function ExploreDisplay(props){
    return(
        <div className="exploreFeed">

            <div className="exploreTop">

                <div className="exploreTopLeft">
                    
                    <img 
                        className="exploreLeftImg" 
                        src={props.sourceOne}/> 
                    <img 
                        className="exploreLeftImg" 
                        src={props.sourceTwo}/>                
                   
                </div>

                <div className="exploreTopRight">
                    <video autoPlay loop muted className="exploreRightImg">
                        <source src={props.video} type='video/mp4' 
                        />
                    </video>
                    <div className='playIconCon'>
                        <PlayCircleFilledRoundedIcon className='playIcon'/>
                        </div>
                    
                </div>

            </div>


            <div className="exploreBottom">
            <img 
                    className="exploreBottomImg" 
                    src={props.source3}/> 
            
            <img 
                    className="exploreBottomImg" 
                    src={props.source4}/> 
            
            <img 
                    className="exploreBottomImg" 
                    src={props.source5}/> 
            </div>

        </div>
    )
}