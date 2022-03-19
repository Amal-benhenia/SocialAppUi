import { MoreVert } from '@mui/icons-material'
import './post.css'
import {Users} from '../../data'
import { useState } from 'react'

const Post = ({post}) => {
const [likes, setLikes]=useState(post.likes)
const [isLiked, setisLiked]=useState(false)
const likeHandler=() =>{
setLikes(isLiked ? likes-1: likes+1 )
setisLiked(!isLiked)

}
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='postContainer'>
    <div className='postWrapper'>
    <div className='postTop'>
    <div className='postTopLeft'>
    <img className='postProfilePicture' src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt=''/>
    <span className='postUserName'>{Users.filter((u)=> u.id === post.userId)[0].profileName}</span>
    <span className='postDate'>{post.date}</span>
    </div>
    <div className='postTopRight'>
    <MoreVert/>
    </div>
    </div>
    <div className='postCenter'>
    <span className='postContenttext'>{post.desc}</span>
    <img className='postPicture' src ={post.photo}/>
    </div>
    <div className='postBottom'>
    <div className='postBottomLeft'>
    <img className='likeIcon' src='/assets/like.png' onClick={likeHandler}/>
    <img className='likeIcon' src='/assets/heart.png' onClick={likeHandler}/>
    <span className='likesCounter'>{likes} people liked this</span>
    </div>
    <div className='postBottomRight'>
    <span className='postCommentText'>{post.comment} comments</span>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Post