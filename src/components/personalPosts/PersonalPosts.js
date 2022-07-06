
import { Posts } from '../../People'

import './personalPost.css'

export default function PersonalPosts({post,toggle}){
    return(
        <div>
            {Posts.map(post=>(
                <img src={post.photo} className={`personalPostImg${toggle}`}/>
            ))}
            
        </div>
    )
}