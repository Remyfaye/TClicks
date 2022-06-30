

import './personalPost.css'

export default function PersonalPosts({post,toggle}){
    return(
        <div>
            <img src={post.photo} className={`personalPostImg${toggle}`}/>
        </div>
    )
}