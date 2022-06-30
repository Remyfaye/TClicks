
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import {Users} from '../../dummyData'
import {useState} from 'react'

export default function Post({post}){
    const user = Users.filter((u) => (u.id === post.userId))
    console.log(user[0].username)

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    const[dislike,setDislike] = useState(post.dislike)
    const[isDisliked,setIsDisliked] = useState(false)
    const dislikeHandler = ()=>{
        setDislike(isDisliked? dislike - 1 : dislike + 1)
        setIsDisliked(!isDisliked)
    }
    return(
        <div className='post'>
            <div className='postWrapper'>

                <div className='postTop'>

                    <div className='postTopLeft'>
                        <img alt='' src={user[0].profilepicture} className='postProfileImg'/>
                        <span className='postUsername'>
                            {user[0].username}
                        </span>                        
                    </div>

                    <div className='postTopRight'>
                        <MoreVertIcon/>
                    </div>
                </div>

                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img alt='' src={post.photo} className='postImg'/>
                </div>

                <div className='postBottom'>

                    <div className='postBottomLeft'>

                        <div className='favorite'>
                            <FavoriteIcon className='likeIcon' onClick={likeHandler}/>
                            <span className='likeNumber'>{like}</span>
                        </div>
                        
                        <div className='favorite'>
                            <ThumbDownAltIcon className='likeIcon' onClick={dislikeHandler}/>
                            <span className='likeNumber'>{dislike}</span>
                        </div>

                        <div className='favorite'>
                            <CommentIcon className='likeIcon'/>
                            <span className='likeNumber'>{post.comment}</span>
                        </div>
                        
                    </div>

                    <div className='postBottomRight'>
                    <span className='postDate'>{post.date}</span>
                    </div>
                </div>
            </div>

            
        </div>
    )
}