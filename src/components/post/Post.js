
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import {Users} from '../../dummyData';
import {people} from '../../People';
import {Posts} from '../../People';
import {useState} from 'react';
import image from '../../assets/posts/2.jpeg'


export default function Post({post}){
    const user = Users.filter((u) => (u.id === post.userId))
    console.log(user[0].id)

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
        <div >

            {Posts.map((post)=>(

                <div className='postWrapper'
                style={{backgroundImage:`url('${post.photo}')`}}>

                     <div className='postTop'>

        <div className='postTopLeft'>
            <img alt='' src={post.profilePicture} className='postProfileImg'/>
            <span className='postUsername'>
                {post.username}
            </span>                        
        </div>

        <div className='postTopRight'>
            <MoreVertIcon/>
        </div>
                    </div>

    

                    <div className='postBottom'>

        <div className='postBottomLeft'>

            <div className='favorite'>
                <FavoriteIcon 
                className='likeIcon' 
                onClick={likeHandler}
                fontSize='large'/>
                <span className='likeNumber'>{like}</span>
            </div>
            
            <div className='favorite'>
                <ThumbDownAltIcon fontSize='large' className='likeIcon' onClick={dislikeHandler}/>
                <span className='likeNumber'>{dislike}</span>
            </div>

            <div className='favorite'>
                <CommentIcon fontSize='large' className='likeIcon'/>
                <span className='likeNumber'>{post.comment}</span>
            </div>
            
        </div>

        <div className='postBottomRight'>
            <span className='postText'>{post.desc}</span>
            <span className='postDate'>{post.date}</span>
        </div>

       
       
                    </div>
                </div>
            ))}
            
        </div>

            
            

            
        
    )
}