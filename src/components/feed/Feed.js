import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from '../../data'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Feed() {
  const [posts, setPosts]=useState([]);
  useEffect(() => {
    const fetchposts= async()=>{
    const res= await axios.get("post/timeline/62333be19b6bff8b4c0d7428")
      console.log(res)
    }
    fetchposts();
  }, [])
  



  return (
    <div className='feed'>
    <div className='feedWrapper'>
    <Share/>
     { 
       /*Posts.map((p)=>(
      <Post key={p.id} post={p}/>
     ))*/
    }
   
    
    </div>
    </div>
  )
}

export default Feed