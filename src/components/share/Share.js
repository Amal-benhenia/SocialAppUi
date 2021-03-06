import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import './share.css'

const Share = () => {
  return (
    <div className='share'><div className='shareWrapper'>
    <div className='shareTop'>
    <img className='ProfileImg' src ='/assets/people/1.jpg' alt=''/>
    <input type='text' placeholder="What's on your mind Amal?" className='shareInput'/>
    </div>
    <hr className='shareHr'/>
    <div className='shareBottom'>
    <div className='shareOptionsContainer'>
    <div className='shareOption'>
    <PermMedia htmlColor='tomato'className='shareIcon'/>
    <span className='shareOptionText'>Photo or Video</span>
    </div>
    <div className='shareOption'>
    <Label htmlColor='blue' className='shareIcon'/>
    <span className='shareOptionText'>Tag</span>
    </div>
    <div className='shareOption'>
    <Room htmlColor='green' className='shareIcon'/>
    <span className='shareOptionText'>Location</span>
    </div>
    <div className='shareOption'>
    <EmojiEmotions htmlColor='gold' className='shareIcon'/>
    <span className='shareOptionText'>Feelings</span>
    </div>
    </div>
    <button className='shareButton'>Share</button>
    </div>
    </div>
    </div>
  )
}

export default Share
