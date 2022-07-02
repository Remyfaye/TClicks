
import './explorefeed.css'
import {Posts} from '../../dummyData'
import ExploreDisplay from './ExploreDisplay'
import Post from '../post/Post'
import Kettle from '../video/kettle.mp4'
import Street from '../video/street.mp4'
import Woman from '../video/woman.mp4'


export default function Explorefeed(){
    return(
        <div className="exploreWrapper">
            
                <ExploreDisplay 
                sourceOne='assets/posts/1.jpeg'
                sourceTwo='assets/posts/2.jpeg'
                source3='assets/posts/9.jpeg'
                source4='assets/posts/10.jpeg'
                source5='assets/posts/11.jpeg'
                video={Kettle}
                />
                <ExploreDisplay 
                sourceOne='assets/posts/12.jpeg'               
                sourceTwo='assets/posts/4.jpeg'
                source3='assets/posts/5.jpeg'
                source4='assets/posts/10.jpeg'
                source5='assets/posts/12.jpeg'
                video={Woman}
                />

                <ExploreDisplay 
                sourceOne='assets/posts/12.jpeg'               
                sourceTwo='assets/posts/4.jpeg'
                source3='assets/posts/5.jpeg'
                source4='assets/posts/10.jpeg'
                source5='assets/posts/12.jpeg'
                video={Street}
                />
            
            
        </div>
    )
}