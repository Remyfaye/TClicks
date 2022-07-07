
import './explorefeed.css'
import {Posts} from '../../dummyData'
import ExploreDisplay from './ExploreDisplay'
import Post from '../post/Post'
import Kettle from '../../video/kettle.mp4'
import Street from '../../video/street.mp4'
import Woman from '../../video/woman.mp4'

import image2 from '../../assets/posts/9.jpeg'
import image3 from '../../assets/posts/10.jpeg'
import image4 from '../../assets/posts/11.jpeg'
import image5 from '../../assets/posts/1.jpeg'
import image6 from '../../assets/posts/2.jpeg'
import image7 from '../../assets/posts/3.jpeg'



export default function Explorefeed(){
    return(
        <div className="exploreWrapper">
            
                <ExploreDisplay 
                sourceOne={image2}
                sourceTwo={image3}
                source3={image4}
                source4={image7} 
                source5={image5} 
                video={Kettle}
                />
                <ExploreDisplay 
                sourceOne={image2}               
                sourceTwo={image3}
                source3={image5}
                source4={image6} 
                source5={image5}
                video={Woman}
                />

                <ExploreDisplay 
                sourceOne={image7}              
                sourceTwo={image2} 
                source3={image2} 
                source4={image3} 
                source5={image6} 
                video={Street}
                />
            
            
        </div>
    )
}